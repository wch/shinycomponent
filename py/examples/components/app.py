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
                    ui.h2("Select inputs"),
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
                        label="Option groups, placeholder",
                        choices={
                            "Group A": {"a1": "Choice A1", "a2": "Choice A2"},
                            "Group B": ["Choice B"],
                            "Group C": ["c1", "c2"],
                        },
                        selected=["second", "first"],
                        placeholder="Select something",
                    ),
                ),
                sc.grid_item(),
                nCols=2,
                nRows=1,
            ),
            name="Select",
        ),
        Tag("shiny-footer", ui.tags.span("Experimental Shiny"), Tag("theme-chooser")),
    ),
)


def server(input: Inputs, output: Outputs, session: Session):
    ...


app = App(
    app_ui,
    server,
)
