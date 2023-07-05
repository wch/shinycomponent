# pyright: basic
# Inspired by https://dribbble.com/shots/20836166-Veritas-Admin-Dashboard-Analytics-UX
import json
from pathlib import Path

import ipyleaflet as L
import matplotlib.pyplot as plt
import pandas as pd
import shiny.experimental as x
from htmltools import Tag
from ipywidgets import Layout
from shiny import App, Inputs, Outputs, Session, reactive, render, ui
from shinywidgets import output_widget, register_widget

import shinycomponent as sc

www_dir = Path(__file__).parent.resolve() / "www"

# Load ebird-data.csv into a pandas dataframeget_records
ebird_data = pd.read_csv(Path(__file__).parent / "ebird-data.csv")


# Read in the json file to a dictionary
with open(Path(__file__).parent / "species-taxonomy.json", "r") as f:
    species_taxonomy = json.load(f)

species_to_id = {
    "Eastern Wood-Pewee": "eawpew",
    "Wood Duck": "wooduc",
    "Northern Flicker": "norfli",
    "Red-Tailed Hawk": "rethaw",
    "Belted Kingfisher": "belkin1",
    "Bald Eagle": "baleag",
}

# Get keys of species_to_id in a vector
species_names = list(species_to_id.keys())
ann_arbor_lat_lon = [42.273991, -83.754550]


# A function to query ebird_data for records that match a given species name, a minimum distance in miles, and a maximum number of days back
def get_records(species_name: str, min_distance_mi: float, max_days_back: int):
    return ebird_data[
        (ebird_data["comName"] == species_name)
        & (ebird_data["distance_mi"] <= min_distance_mi)
        & (ebird_data["days_back"] <= max_days_back)
    ]


# A function to get the taxonomy of a species from its name
def get_taxonomy_from_name(species_name):
    return species_taxonomy[species_name]


def info_box(title: str, output_id: str, icon: str, color: str):
    return x.ui.value_box(
        title,
        ui.output_text(output_id, container=ui.h3),
        showcase=ui.h2(icon),
        theme_color=None,
        style=f"background-color: {color}; color: var(--gray-8);",
        height="90px",
        full_screen=True,
    )


app_ui = sc.page_dashboard(
    ui.tags.head(
        # Hide the leaflet footer
        ui.tags.style(
            ".leaflet-container .leaflet-control-attribution {display: none;}"
        )
    ),
    sc.sidebar(
        sc.icon_section(
            Tag("posit-logo", withName=True, slot="icon"),
            ui.h2("EBird Explorer"),
        ),
        sc.icon_section(
            ui.tags.small(
                ui.em(
                    "Below are some inputs that control the app content. Use them and explore the birds of Ann Arbor!"
                )
            ),
            icon="bi:info-circle",
        ),
        sc.icon_section(
            sc.forge.input_select(
                id="species",
                label="Species",
                choices=species_names,
                selected=species_names[0],
            ),
            icon="bi:sliders2",
        ),
        sc.icon_section(
            sc.forge.input_number(
                id="radius",
                label="Distance from Ann Arbor",
                value=10,
                min=1,
                max=100,
            ),
            sc.forge.input_number(
                id="days_back",
                label="Days back to look",
                value=3,
                min=1,
                max=100,
            ),
            icon="bi:funnel",
        ),
    ),
    # Make a grid with 4 rows and 3 columns
    sc.grid(
        ui.div(
            ui.output_text("common_name", container=ui.h2),
            style="display: grid; place-content: center;",
        ),
        sc.grid_item(
            output_widget("map", width="100%", height="100%"),
            width=2,
            height=3,
        ),
        sc.grid_item(
            {"class": "fluid-type"},
            ui.output_text("results_blurb"),
            width=1,
            height=2,
            centercontent=True,
        ),
        # Value boxes are 4 rows tall
        # sc.grid_item(ui.output_text("results_blurb")),
        sc.grid_item(
            sc.output_data_grid("results_table"),
            width=2,
            height=3,
        ),
        sc.grid_item(
            sc.card_header("Distance from Ann Arbor"),
            ui.output_plot("distogram"),
            sc.card_footer(
                sc.forge.input_slider(
                    id="bins",
                    label="Bins for histogram",
                    min=5,
                    max=60,
                    value=30,
                    marks=[5, 15, 25, 35, 45, 55],
                ),
            ),
            # info_box(
            #     title="Scientific Name",
            #     output_id="species_scientific_name",
            #     icon="🥼",
            #     color="var(--orange-4)",
            # ),
            # info_box(
            #     title="Family",
            #     output_id="species_family",
            #     icon="👨‍👩‍👧‍👦",
            #     color="var(--blue-4)",
            # ),
            # info_box(
            #     title="Order",
            #     output_id="species_order",
            #     icon="📦",
            #     color="var(--green-4)",
            # ),
            width=1,
            height=3,
        ),
        n_rows=6,
        n_cols=3,
    ),
    sc.footer(ui.tags.span("Experimental Shiny"), Tag("theme-chooser")),
)


def server(input: Inputs, output: Outputs, session: Session):
    # Initialize and display when the session starts (1)
    map = L.Map(
        center=ann_arbor_lat_lon,
        zoom=11,
        scroll_wheel_zoom=True,
        basemap=L.basemaps.Esri.WorldTopoMap,
        layout=Layout(width="100%", height="100%"),
    )
    # Add a distance scale
    map.add_control(L.leaflet.ScaleControl(position="bottomleft"))
    bird_markers = L.LayerGroup()
    map.add_layer(bird_markers)
    register_widget("map", map)

    @reactive.Calc
    def ebird_results() -> pd.DataFrame:
        """Returns a Pandas data frame that includes only the desired rows"""

        if input.species() is None:
            return pd.DataFrame()

        # Get nearby records for the past 3 days
        return get_records(
            input.species(),
            input.radius(),
            input.days_back(),
        )

    @reactive.Effect
    def update_map():
        records = ebird_results()
        print("Here are the records we're trying to map....")
        markers_for_records = []
        for record_index in range(len(records)):
            record = records.iloc[record_index]
            center = (record["lat"], record["lng"])
            location = record["locName"]
            marker = L.Marker(location=center, draggable=False, title=location)
            markers_for_records.append(marker)

        bird_markers.clear_layers()
        bird_marker_cluster = L.MarkerCluster(markers=markers_for_records)
        bird_markers.add_layer(bird_marker_cluster)

    @reactive.Calc
    def species_info():
        return get_taxonomy_from_name(input.species())

    @output
    @render.plot()
    def distogram():
        plt.hist(ebird_results()["distance_mi"], input.bins(), density=True)

    @output
    @render.text
    def species_scientific_name():
        return species_info()["sciName"]

    @output
    @render.text
    def species_order():
        return species_info()["order"]

    @output
    @render.text
    def species_family():
        return species_info()["familyComName"]

    @output
    @render.text
    def common_name():
        return input.species()

    @output
    @sc.data_grid(height="500px", row_selection=True)
    def results_table():
        return ebird_results()

    @output
    @render.text
    def results_blurb():
        num_results = len(ebird_results())
        species = input.species()
        radius = input.radius()

        num_results_text = (
            "There have been no observations"
            if num_results == 0
            else "There has been one observation"
            if num_results == 1
            else f"There have been {num_results} observations"
        )
        location_text = f"within {radius} miles of Ann Arbor"
        days_back_text = f"in the past {'day' if input.days_back() == 1 else f'{input.days_back()} days'}"

        if num_results == 0:
            return f"There have been no observations of {species}s {location_text} {days_back_text}"

        return f"{num_results_text} of {species} {location_text} {days_back_text}"


app = App(
    app_ui,
    server,
    static_assets=str(www_dir),
)
