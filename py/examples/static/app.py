# pyright: basic

import json
from pathlib import Path

import pandas as pd
from shiny import App, ui

import shinycomponent as sc

data = pd.read_csv(Path(__file__).parent / "riaa-us-revenue.csv")
avg_rev = data["revenue"].mean()
most_common_format = data["format"].mode()[0]
max_rev = data["revenue"].max()
max_rev_format = data[data["revenue"] == max_rev]["format"].values[0]

app_ui = sc.page_dashboard(
    sc.header(ui.h2("Sales of things over years")),
    sc.grid(
        sc.grid_item(
            sc.value_box(
                title="Average Revenue",
                subtitle="In millions of dollars",
                value=avg_rev,
                bg="var(--cyan-2)",
                icon="uil:horizontal-distribution-center",
            ),
            sc.value_box(
                title="Most Common",
                subtitle="Format type",
                value=most_common_format,
                bg="var(--green-4)",
                icon="tabler:chart-bar",
            ),
            sc.value_box(
                title="Highest Revenue",
                subtitle="In millions of dollars",
                value=max_rev,
                subvalue=f"format: {max_rev_format}",
                bg="rgb(156, 54, 181)",
                icon="fluent-mdl2:up",
            ),
        ),
        sc.grid_item(sc.observable_plot(data=data)),
    ),
)

app = App(
    app_ui,
    None,
)
