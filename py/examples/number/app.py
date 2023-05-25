# pyright: reportUnusedFunction=false

from shiny import App, Inputs, Outputs, Session, render, ui
from shinycomponent import example_number_input

app_ui = ui.page_fluid(
    ui.h5("Number Input"),
    example_number_input("x", value=10, min=5, max=15),
    ui.output_text_verbatim("txt"),
)


def server(input: Inputs, output: Outputs, session: Session):
    @output
    @render.text
    def txt():
        return f"x: {input.x()}"


app = App(app_ui, server, debug=True)
