# TODO-future: Add filter of X varaible to reduce the data? (Here we would show "Gentoo" has count 0, rather than remove if no data exists)
# TODO-future: Add brushing to zoom into the plot. The counts should represent the data in the zoomed area. (Single click would zoom out)

from pathlib import Path
from typing import List

import pandas as pd
import seaborn as sns
import shiny.experimental as x
import shinyswatch
from colors import bg_palette, palette
from htmltools import Tag
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

body:has([choice="purple"]) {
   --accent-gradient: var(--gradient-2);
}

body:has([choice="green"]) {
  --accent-gradient: var(--gradient-4);
  --sidebar-bg-color: var(--stone-10);
  --sidebar-color: var(--stone-0);
}

body:has([choice="wild"]) {
  --accent-gradient: linear-gradient(
      37deg in oklab,
      oklch(55% .45 350) 0%, oklch(100% .4 95) 115% 115%
    );
    --sidebar-bg-color: oklch(55% .45 350);
    --sidebar-color: var(--stone-0);
}
"""

app_ui = sc.page(
    ui.head_content(ui.tags.style(app_css)),
    shinyswatch.theme.pulse(),
    sc.tabset(
        {"id": "tabset1"},
        sc.tab(
            ui.tags.h2("No server needed!"),
            Tag("simple-number-input", id="num_in_static"),
            Tag("simple-number-output", id="num_out_static", watch="num_in_static"),
            name="Static",
        ),
        sc.tab(
            Tag("star-rating", id="foo"),
            Tag("star-rating", id="foo1"),
            ui.output_text_verbatim("txt"),
            Tag(
                "shiny-collapsible",
                ui.output_ui("value_boxes"),
                dir="to_top",
                label="Fun Facts",
            ),
            x.ui.output_plot("scatter", fill=True),
            name="Plot",
        ),
        sc.tab(
            Tag("simple-number-input", id="num_in"),
            ui.output_text_verbatim("num_out"),
            name="Number Input",
        ),
        sc.tab(
            Tag("color-picker", id="color"),
            ui.div(
                {"style": "max-width: 400px; margin-top: 15px;"},
                ui.h4("Sliders"),
                sc.mui_slider(
                    id="slider1",
                    default_value=11,
                    min=1,
                    max=20,
                    value_label_display="auto",
                ),
                sc.mui_slider(
                    id="slider2",
                    default_value=5,
                    min=1,
                    max=20,
                    value_label_display="on",
                    size="small",
                ),
                sc.mui_slider(
                    id="slider3",
                    default_value=11,
                    min=1,
                    max=21,
                    step=2,
                    value_label_display="auto",
                    marks=True,
                ),
                sc.mui_slider(
                    id="slider4",
                    default_value=20,
                    min=0,
                    max=100,
                    step=None,
                    value_label_display="auto",
                    marks=[
                        {
                            "value": 0,
                            "label": "0°C",
                        },
                        {
                            "value": 20,
                            "label": "20°C",
                        },
                        {
                            "value": 37,
                            "label": "37°C",
                        },
                        {
                            "value": 100,
                            "label": "100°C",
                        },
                    ],
                ),
            ),
            ui.output_text_verbatim("current_color", placeholder=True),
            name="Color Picker",
        ),
        sc.tab(
            Tag("shiny-collapsible", "To Top", dir="to_top", label="My Collapser"),
            Tag("shiny-collapsible", "To Right", dir="to_right"),
            Tag("shiny-collapsible", "To Bottom", dir="to_bottom"),
            Tag("shiny-collapsible", "To Left", dir="to_left"),
            name="Collapser",
        ),
        sc.sidebar(
            ui.output_text_verbatim("current_tab"),
            # Artwork by @allison_horst
            ui.tags.img(
                src="palmerpenguins.png", width="80%", class_="mt-0 mb-2 mx-auto"
            ),
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
        Tag("shiny-footer", ui.tags.span("Experimental Shiny"), Tag("theme-chooser")),
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
    def current_color():
        return f"{input.color()}\n{input.slider1()}\n{input.slider2()}\n{input.slider3()}\n{input.slider4()}"

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

        return x.ui.layout_column_wrap(1 / len(value_boxes), *value_boxes)


app = App(
    app_ui,
    server,
    static_assets=str(www_dir),
)
