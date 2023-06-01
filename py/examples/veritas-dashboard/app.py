# Inspired by https://dribbble.com/shots/20836166-Veritas-Admin-Dashboard-Analytics-UX

from pathlib import Path
from typing import List

import pandas as pd
import seaborn as sns
import shiny.experimental as x
import shinyswatch
from colors import bg_palette, palette
from htmltools import Tag, TagAttrs, TagAttrValue, TagChild
from shiny import App, Inputs, Outputs, Session, reactive, render, req, ui

import shinycomponent as sc

sns.set_theme()

www_dir = Path(__file__).parent.resolve() / "www"

df = pd.read_csv(Path(__file__).parent / "penguins.csv", na_values="NA")
numeric_cols: List[str] = df.select_dtypes(include=["float64"]).columns.tolist()
species: List[str] = df["Species"].unique().tolist()
species.sort()

app_css = """
:not(:defined) { visibility: hidden;}
.parts-styled-input {
    --number-input-border-width: 0;
    --number-input-bg-color: transparent;
}
.parts-styled-input::part(input) {
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-blob-3);
}
.parts-styled-input::part(input),
.parts-styled-input::part(plus-button),
.parts-styled-input::part(minus-button) {
    background-color: var(--color-primary);
    color: var(--gray-1);
    box-shadow: var(--shadow-4);
    border: none;
}
.parts-styled-input::part(plus-button) {
    border-radius: var(--radius-blob-1);
}
.parts-styled-input::part(minus-button) {
    border-radius: var(--radius-blob-2);
}
"""

simple_styles = """
--number-input-padding-inline: var(--size-2);
--number-input-border-radius: var(--radius-1);
--number-input-font-size: var(--font-size-0);
"""

purple_styles = """
--number-input-bg-image: var(--gradient-11);
--number-input-text-color: white;
--number-input-padding-inline: var(--size-5);
--number-input-border-radius: 50%;
"""


parts_styled_style = """
.parts-styled-input {
    --number-input-border-width: 0;
}
.parts-styled-input::part(input) {
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-blob-3);
}
.parts-styled-input::part(input),
.parts-styled-input::part(plus-button),
.parts-styled-input::part(minus-button) {
    background-color: var(--color-primary);
    color: var(--gray-1);
    box-shadow: var(--shadow-4);
    border: none;
}
.parts-styled-input::part(plus-button) {
    border-radius: var(--radius-blob-1);
}
.parts-styled-input::part(minus-button) {
    border-radius: var(--radius-blob-2);
}
"""

about_puffins_blurb = """
Sure, penguins are charismatic with their tuxedo-patterned outfits, but have you ever
considered puffins? Penguins may monopolize the spotlight in nature documentaries, but
it's high time the humble puffin received some love. While penguins waddle aimlessly on
ice, puffins zip through the air at up to 55 mph and dive underwater in pursuit of
dinner.
"""


def tall_item(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    # return sc.grid_item(sc.grid(*args, nRows=3, nCols=1, **kwargs), height=4)
    return sc.grid_item(*args, height=4, **kwargs)


def show_theme(theme_text: str):
    return ui.pre(
        ui.code(theme_text),
        style="font-size: var(--font-size-0); padding: 0; flex:2;",
    )


app_ui = sc.page(
    ui.head_content(
        ui.tags.style(app_css),
        ui.tags.link(
            rel="stylesheet",
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1",
        ),
        ui.tags.link(
            rel="stylesheet",
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL@20..48,100..700,0..1",
        ),
        ui.tags.link(
            rel="stylesheet",
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL@20..48,100..700,0..1",
        ),
        ui.tags.style(
            "md-icon[filled] { --md-icon-font-variation-settings: 'FILL' 1; }"
        ),
    ),
    Tag(
        "shiny-op-tabset",
        {"id": "tabset1"},
        sc.tab(
            # Make a grid with 4 rows and 3 columns
            sc.grid(
                # Blurb takes up 2 of 3 columns
                sc.grid_item(ui.p(about_puffins_blurb), width=2),
                # Value boxes are 4 rows tall
                ui.output_ui("value_boxes", container=tall_item),
                # Scatter plot is 3 rows tall and 2 columns wide
                sc.grid_item(
                    x.ui.output_plot("scatter", fill=True),
                    width=2,
                    height=3,
                ),
                nRows=4,
                nCols=3,
            ),
            name="Plot",
        ),
        sc.tab(
            sc.static_data_grid(df),
            name="Table",
        ),
        sc.sidebar(
            Tag("posit-logo"),
            ui.input_selectize(
                "xvar",
                "X variable",
                numeric_cols,
                selected="Bill Length (mm)",
            ),
            ui.input_selectize(
                "yvar",
                "Y variable",
                numeric_cols,
                selected="Bill Depth (mm)",
            ),
            ui.input_checkbox_group(
                "species", "Filter by species", species, selected=species
            ),
            ui.hr(),
            ui.input_switch("by_species", "Show species", value=True),
            ui.input_switch("show_margins", "Show marginal plots", value=True),
        ),
        Tag(
            "shiny-footer",
            ui.tags.span(
                "Inspired by ",
                ui.tags.a(
                    "Veritas Admin Dashboard",
                    href="https://dribbble.com/shots/20836166-Veritas-Admin-Dashboard-Analytics-UX",
                ),
            ),
            Tag("theme-chooser"),
        ),
        ui.tags.div("Puffins are cool", {"slot": "header"}),
        selected_tab_index=2,
    ),
)


def server(input: Inputs, output: Outputs, session: Session):
    @output
    @render.text
    def current_tab():
        return f"Current tab: {input.tabset1()}"

    @reactive.Calc
    def filtered_df() -> pd.DataFrame:
        """Returns a Pandas data frame that includes only the desired rows"""

        # This calculation "req"uires that at least one species is selected
        req(len(input.species()) > 0)

        # Filter the rows so we only include the desired species
        return df[df["Species"].isin(input.species())]

    @output
    @render.plot
    def scatter():
        """Generates a plot for Shiny to display to the user"""

        # The plotting function to use depends on whether margins are desired
        plotfunc = sns.jointplot if input.show_margins() else sns.scatterplot

        plotfunc(
            data=filtered_df(),
            x=input.xvar(),
            y=input.yvar(),
            palette=palette,
            hue="Species" if input.by_species() else None,
            hue_order=species,
            legend=False,
        )

    @output
    @render.text
    def txt():
        return str(input.foo()) + ":" + str(input.foo1())

    @output
    @render.text
    def num_out():
        return str(input.num_in())

    @output
    @render.text
    def num_out2():
        return str(input.num_in2())

    @output
    @render.text
    def current_color():
        return (
            f"{input.color()}\n{input.slider1()}\n{input.slider2()}\n{input.slider3()}"
        )

    @output
    @render.ui
    def value_boxes():
        df = filtered_df()

        def penguin_value_box(title: str, count: int, bgcol: str, showcase_img: str):
            return x.ui.value_box(
                title,
                count,
                {"class_": "pt-1 pb-0"},
                showcase=x.ui.bind_fill_role(
                    ui.tags.img({"style": "object-fit:contain;"}, src=showcase_img),
                    item=True,
                ),
                theme_color=None,
                style=f"background-color: {bgcol};",
                height="90px",
                full_screen=True,
            )

        if not input.by_species():
            return penguin_value_box(
                "Penguins",
                len(df.index),
                bg_palette["default"],
                # Artwork by @allison_horst
                showcase_img="penguins.png",
            )

        value_boxes = [
            penguin_value_box(
                name,
                len(df[df["Species"] == name]),
                bg_palette[name],
                # Artwork by @allison_horst
                showcase_img=f"{name}.png",
            )
            for name in species
            # Only include boxes for _selected_ species
            if name in input.species()
        ]

        return value_boxes


app = App(
    app_ui,
    server,
    static_assets=str(www_dir),
)
