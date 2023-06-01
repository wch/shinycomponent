# pyright: reportUnusedFunction=false
# TODO-future: Add filter of X varaible to reduce the data? (Here we would show "Gentoo" has count 0, rather than remove if no data exists)
# TODO-future: Add brushing to zoom into the plot. The counts should represent the data in the zoomed area. (Single click would zoom out)

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

body:has([choice="purple"]) {
   --color-bg: var(--purple-1);
   --color-bg-1: var(--purple-2);
   --color-bg-2: var(--purple-3);
   --color-primary: var(--purple-10);
   --color-border: var(--gray-10);
}

body:has([choice="green"]) {
  --color-bg: var(--green-1);
   --color-bg-1: var(--green-2);
   --color-bg-2: var(--green-3);
   --color-primary: var(--green-10);
}

body:has([choice="wild"]) {
  --color-bg: var(--pink-2);
  --color-bg-1: var(--jungle-7);
  --color-bg-2: var(--yellow-6);
  --color-primary: var(--red-5);
  --radius-small: var(--radius-3);
  --radius-medium: var(--radius-4);
  --radius-large: var(--radius-5);
}

body:has([choice="dark"]) {

   --color-bg: var(--sand-12);
   --color-bg-1: var(--sand-11);
   --color-bg-2: var(--sand-10);

--color-text: var(--stone-0);
  --color-text-1: var(--stone-1);
  --color-text-2: var(--stone-2);
   --color-primary: var(--red-11);
}


  .label-on-left {
    --label-width: 7rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--sl-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--sl-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
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
    shinyswatch.theme.pulse(),
    Tag(
        "shiny-op-tabset",
        {"id": "tabset1"},
        sc.tab(
            sc.grid(
                sc.grid_item(
                    ui.h3("Base"),
                    ui.p(
                        "The following are the number input each with a different set of css variables applied to the parent component to change the style."
                    ),
                    sc.simple_number_input(id="num_in", min=0, max=100),
                ),
                sc.grid_item(
                    ui.h3("Simple"),
                    show_theme(simple_styles),
                    sc.simple_number_input(id="simple_num_in", min=0, max=100),
                    style=simple_styles,
                ),
                sc.grid_item(
                    ui.h3("Purple"),
                    show_theme(purple_styles),
                    sc.simple_number_input(id="purple_num_in", min=0, max=100),
                    style=purple_styles,
                ),
                sc.grid_item(
                    ui.h3("Windows 95"),
                    show_theme(parts_styled_style),
                    sc.simple_number_input(
                        id="purple_num_in", min=0, max=100, class_="parts-styled-input"
                    ),
                ),
                nRows=2,
                nCols=2,
            ),
            name="Number Input",
        ),
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
            sc.simple_number_input(id="num_in", min=0, max=100),
            ui.output_text_verbatim("num_out", placeholder=True),
            Tag("material-slider", id="num_in2", value="20", withLabel=""),
            ui.output_text_verbatim("num_out2", placeholder=True),
            sc.forge.input_text("forgetext", None, wait_for_enter=False),
            sc.forge.input_text(
                "forgetext2",
                label=ui.span(
                    "This is an ",
                    ui.strong("accessible"),
                    " label. The input updates on Enter or loss of focus.",
                ),
                placeholder="This is a placeholder",
                wait_for_enter=True,
                clearable=True,
                size="small",
                pill=True,
            ),
            ui.br(),
            sc.forge.input_text(
                "date1", "Label on left:", class_="label-on-left", type="date"
            ),
            ui.br(),
            sc.forge.input_number(
                "forgenum",
                "Number:",
                min=1,
                max=1000,
                value=5,
                debounce=50,
                help_text="min=1, max=1000, debounce=50",
                class_="label-on-left",
            ),
            sc.forge.input_number(
                "forgenum2",
                "Number 2:",
                min=1,
                max=1000,
                value=4,
                wait_for_enter=True,
                help_text="Updates on Enter/blur",
                class_="label-on-left",
            ),
            ui.div(
                sc.forge.input_checkbox(id="forgecheckbox", label="Checkbox"),
            ),
            ui.div(
                sc.forge.input_switch(id="forgeswitch", label="Switch", value=False),
            ),
            ui.div(
                sc.forge.input_switch(
                    id="forgeswitch2", label="switch2", size="large", value=True
                ),
            ),
            ui.br(),
            ui.output_text_verbatim("forgetext_out", placeholder=True),
            name="Number Input",
        ),
        sc.tab(
            Tag("design-preview"),
            name="Design",
        ),
        sc.tab(
            sc.forge.split_panel(
                {"style": "height: 100%;"},
                ui.div(
                    {
                        "slot": "start",
                        "style": " display: flex; align-items: center; justify-content: center;",
                    },
                    x.ui.output_plot("scatter"),
                ),
                ui.div(
                    {
                        "style": "display: flex; flex-direction: column; align-items: center; justify-content: center;",
                        "slot": "end",
                    },
                    Tag(
                        "shiny-collapsible",
                        ui.output_ui("value_boxes"),
                        dir="to_top",
                        label="Fun Facts",
                    ),
                    sc.forge.split_panel(
                        {
                            "vertical": "",
                            "style": "width: 100%;",
                        },
                        ui.div(
                            Tag("star-rating", id="foo"),
                            slot="start",
                            style="display: flex; align-items: center; justify-content: center;",
                        ),
                        ui.div(
                            Tag("star-rating", id="foo1"),
                            ui.output_text_verbatim("txt"),
                            slot="end",
                            style="display: flex; flex-direction: column; align-items: center; justify-content: center;",
                        ),
                    ),
                ),
            ),
            name="Plot",
        ),
        sc.tab(
            Tag("color-picker", id="color"),
            ui.div(
                {"style": "max-width: 400px; margin-top: 15px;"},
                ui.h4("Sliders"),
                sc.m3_slider(id="slider1", value=11, min=1, max=20, withLabel=""),
                sc.m3_slider(
                    id="slider2",
                    value=5,
                    min=1,
                    max=21,
                    step=2,
                    withTickMarks="",
                    withLabel="",
                ),
                sc.m3_slider(
                    id="slider3",
                    valueStart=8,
                    valueEnd=12,
                    range="",
                    min=1,
                    max=20,
                    step=2,
                    withLabel="",
                ),
            ),
            ui.output_text_verbatim("current_color", placeholder=True),
            name="Color Picker",
        ),
        sc.tab(
            ui.tags.h2("Client-side (non-Shiny) interaction"),
            Tag("simple-number-input", id="num_in_static"),
            Tag("simple-number-output", id="num_out_static", watch="num_in_static"),
            sc.m3_slider(id="num_in_static2", value="20", withLabel=""),
            Tag("simple-number-output", id="num_out_static2", watch="num_in_static2"),
            name="Static",
        ),
        sc.tab(
            sc.static_data_grid(df),
            name="Table",
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
            sc.forge.input_switch("by_species", "Show species", value=True),
            sc.forge.input_switch("show_margins", "Show marginal plots", value=True),
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

    @output
    @render.text
    def forgetext_out():
        return (
            f"{input.forgetext()}\n{input.forgetext2()}\n{input.date1()}"
            + f"\n{input.forgenum()}\n{input.forgenum2()}"
            + f"\n{input.forgecheckbox()}\n{input.forgeswitch()}\n{input.forgeswitch2()}"
        )

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
