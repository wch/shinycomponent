import matplotlib.pyplot as plt
import numpy as np
from htmltools import Tag
from shiny import App, render, ui

import shinycomponent as sc

# Basic paragraph tag with some lorem ipsum text inside of it
lorem_ipsum = ui.p("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")

app_ui = sc.page_dashboard(
    sc.sidebar(
        ui.h3("Themes and colors!"),
        Tag("theme-provider"),
    ),
    sc.grid(
        sc.card(
            sc.header("Pure flex card"),
            Tag("output-plot"),
            lorem_ipsum,
            sc.footer("A footer"),
        ),
        sc.card(
            sc.header("Plot with fixed height"),
            Tag("output-plot", height="100"),
            lorem_ipsum,
            sc.footer(
                sc.forge.input_slider("n", "Number of bins", 10, 100, 20),
            ),
        ),
        sc.card(
            sc.header("Break out of the grid-row height"),
            Tag("output-plot", height="100"),
            lorem_ipsum,
            sc.footer(
                sc.forge.input_slider("n", "Number of bins", 10, 100, 20),
            ),
            height="content",
        ),
        sc.card(
            sc.header("...Or don't"),
            Tag("output-plot", height="90"),
            lorem_ipsum,
            Tag("output-plot"),
        ),
        n_rows=2,
        n_cols=2,
    ),
)


def server(input, output, session):
    pass


app = App(app_ui, server, debug=True)
