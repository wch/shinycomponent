# pyright: reportUnusedFunction=false
import pandas as pd
import seaborn as sns
from shiny import App, Inputs, Outputs, Session, reactive, render, req, ui

import shinycomponent as sc

app_ui = ui.page_fluid(
    ui.h4("Dynamic data"),
    ui.input_select("dataset", "Dataset", sns.get_dataset_names()),
    sc.output_data_frame("grid"),
    ui.panel_absolute(
        ui.output_text_verbatim("detail"),
        right="10px",
        bottom="10px",
    ),
    ui.hr(),
    ui.h4("Static data"),
    sc.output_data_frame(data=sns.load_dataset("penguins")),
)


def server(input: Inputs, output: Outputs, session: Session):
    df: reactive.Value[pd.DataFrame] = reactive.Value()

    @reactive.Effect
    def update_df():
        df.set(sns.load_dataset(req(input.dataset())))

    @output
    @sc.render_data_frame
    def grid():
        return sc.DataTable(df(), height="400px")

    @reactive.Effect
    @reactive.event(input.grid_cell_edit)
    def handle_edit():
        edit = input.grid_cell_edit()
        df_copy = df().copy()
        df_copy.iat[edit["row"], edit["col"]] = edit["new_value"]
        df.set(df_copy)

    @output
    @render.text
    def detail():
        if input.grid_row_selection() is not None:
            # "split", "records", "index", "columns", "values", "table"

            return (
                df()
                .iloc[list(input.grid_row_selection())]
                .to_json(None, orient="records", indent=2)
            )


app = App(app_ui, server)
