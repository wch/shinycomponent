# pyright: basic

import matplotlib.pyplot as plt
import numpy as np
from shiny import App, render

import shinycomponent as sc

app_ui = sc.page_dashboard(
    sc.sidebar(
        sc.forge.input_slider("n", "N", 0, 100, 20),
    ),
    sc.grid(
        sc.grid_item(
            sc.forge.output_plot("histogram"),
        ),
        nRows=1,
        nCols=1,
    ),
)


def server(input, output, session):
    @output
    @render.plot(alt="A histogram")
    def histogram():
        np.random.seed(19680801)
        x = 100 + 15 * np.random.randn(437)
        plt.hist(x, input.n(), density=True)


app = App(app_ui, server, debug=True)
