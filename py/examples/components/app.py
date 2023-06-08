# Inspired by https://dribbble.com/shots/20836166-Veritas-Admin-Dashboard-Analytics-UX

import shiny.experimental as x
from htmltools import Tag, TagAttrs, TagChild
from shiny import App, Inputs, Outputs, Session, reactive, render, ui

import shinycomponent as sc

app_ui = sc.page(
    Tag(
        "shiny-op-tabset",
        sc.sidebar(
            Tag(
                "shiny-section",
                Tag("posit-logo", withName=True, slot="icon"),
                ui.h2("New Shiny components"),
            ),
        ),
        sc.tab(
            # Make a grid with 2 columns
            sc.grid(
                sc.grid_item(
                    sc.forge.input_text(
                        id="text1",
                        label="Basic",
                    ),
                    sc.forge.input_text(
                        id="text2",
                        label="Help text",
                        help_text="This is some help text",
                        placeholder="Placeholder text",
                    ),
                    sc.forge.input_text(
                        id="text3",
                        label="Starting value, clearable",
                        value="This is a starting value",
                        clearable=True,
                    ),
                    sc.forge.input_text(
                        id="text4",
                        label="Password, pill",
                        password=True,
                        pill=True,
                    ),
                ),
                sc.grid_item(
                    ui.output_text_verbatim("out_text1", placeholder=True),
                    ui.output_text_verbatim("out_text2", placeholder=True),
                    ui.output_text_verbatim("out_text3", placeholder=True),
                    ui.output_text_verbatim("out_text4", placeholder=True),
                ),
                nCols=2,
                nRows=1,
            ),
            name="Text",
        ),
        sc.tab(
            # Make a grid with 2 columns
            sc.grid(
                sc.grid_item(
                    sc.forge.input_select(
                        id="select1",
                        label="Basic",
                        choices=["First choice", "Second choice", "Third choice"],
                    ),
                    sc.forge.input_select(
                        id="select2",
                        label="Starting value, clearable, help text",
                        choices={
                            "first": "First choice",
                            "second": "Second choice",
                            "third": "Third choice",
                        },
                        selected="second",
                        help_text="This is some help text",
                        clearable=True,
                    ),
                    sc.forge.input_select(
                        id="select3",
                        label="Multiple, clearable",
                        choices={
                            "first": "First choice",
                            "second": "Second choice",
                            "third": "Third choice",
                        },
                        selected=["second", "first"],
                        multiple=True,
                    ),
                    sc.forge.input_select(
                        id="select4",
                        label="Option groups, placeholder, pill",
                        choices={
                            "Group A": {"a1": "Choice A1", "a2": "Choice A2"},
                            "Group B": ["Choice B"],
                            "Group C": ["c1", "c2"],
                        },
                        selected=["second", "first"],
                        placeholder="Select something",
                        pill=True,
                    ),
                ),
                sc.grid_item(
                    ui.output_text_verbatim("out_select1", placeholder=True),
                    ui.output_text_verbatim("out_select2", placeholder=True),
                    ui.output_text_verbatim("out_select3", placeholder=True),
                    ui.output_text_verbatim("out_select4", placeholder=True),
                ),
                nCols=2,
                nRows=1,
            ),
            name="Select",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_checkbox(
                        id="checkbox1",
                        label="Basic",
                    ),
                    sc.forge.input_checkbox(
                        id="checkbox2", label="Checked", value=True
                    ),
                    sc.forge.input_checkbox(
                        id="checkbox3",
                        label="Small",
                        size="small",
                    ),
                ),
                sc.grid_item(
                    ui.output_text_verbatim("out_checkbox1", placeholder=True),
                    ui.output_text_verbatim("out_checkbox2", placeholder=True),
                    ui.output_text_verbatim("out_checkbox3", placeholder=True),
                ),
                nCols=2,
                nRows=1,
            ),
            name="Checkbox",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_switch(
                        id="switch1",
                        label="Basic",
                    ),
                    sc.forge.input_switch(id="switch2", label="Checked", value=True),
                    sc.forge.input_switch(id="switch3", label="Small", size="small"),
                    sc.forge.input_switch(
                        id="switch4",
                        label="Huge, via CSS vars",
                        style="""--width: calc(var(--height) * 1.75);
                                --height: 44px;
                                --thumb-size: 40px;
                                """,
                    ),
                ),
                sc.grid_item(
                    ui.output_text_verbatim("out_switch1", placeholder=True),
                    ui.output_text_verbatim("out_switch2", placeholder=True),
                    ui.output_text_verbatim("out_switch3", placeholder=True),
                    ui.output_text_verbatim("out_switch4", placeholder=True),
                ),
                nCols=2,
                nRows=1,
            ),
            name="Switch",
        ),
        Tag("shiny-footer", ui.tags.span("Experimental Shiny"), Tag("theme-chooser")),
    ),
)


def server(input: Inputs, output: Outputs, session: Session):
    for i in range(4):
        make_output(input[f"text{i+1}"], f"out_text{i+1}", output)

    for i in range(4):
        make_output(input[f"select{i+1}"], f"out_select{i+1}", output)

    for i in range(3):
        make_output(input[f"checkbox{i+1}"], f"out_checkbox{i+1}", output)

    for i in range(4):
        make_output(input[f"switch{i+1}"], f"out_switch{i+1}", output)


def make_output(input_val: reactive.Value[object], out_label: str, output: Outputs):
    @output(id=out_label)
    @render.text()
    def _():
        return str(input_val())


app = App(
    app_ui,
    server,
)
