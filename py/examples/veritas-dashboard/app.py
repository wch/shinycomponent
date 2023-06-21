# pyright: basic

# Inspired by https://dribbble.com/shots/20836166-Veritas-Admin-Dashboard-Analytics-UX
import os
from pathlib import Path

import ipyleaflet as L
import pandas as pd
import shiny.experimental as x
from ebird.api import get_nearby_observations, get_nearby_species, get_taxonomy
from htmltools import Tag
from ipywidgets import Layout
from shiny import App, Inputs, Outputs, Session, reactive, render, ui
from shinywidgets import output_widget, register_widget

import shinycomponent as sc

www_dir = Path(__file__).parent.resolve() / "www"

api_key = os.environ["EBIRD_API_KEY"]

species_to_id = {
    "Eastern Wood-Pewee": "eawpew",
    "Wood Duck": "wooduc",
    "Northern Flicker": "norfli",
}

# Get keys of species_to_id in a vector
species_names = list(species_to_id.keys())

ann_arbor_lat_lon = [42.273991, -83.754550]


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
    sc.tab(
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
                shadowed=True,
            ),
            sc.grid_item(
                ui.output_text("results_blurb"),
                width=1,
                height=2,
                shadowed=True,
                centercontent=True,
                style="font-size: calc(var(--font-size-fluid-1)/1.25);",
            ),
            # Value boxes are 4 rows tall
            # sc.grid_item(ui.output_text("results_blurb")),
            sc.grid_item(
                sc.output_data_grid("results_table"),
                width=2,
                height=3,
                shadowed=True,
            ),
            sc.grid_item(
                info_box(
                    title="Scientific Name",
                    output_id="species_scientific_name",
                    icon="🥼",
                    color="var(--orange-4)",
                ),
                info_box(
                    title="Family",
                    output_id="species_family",
                    icon="👨‍👩‍👧‍👦",
                    color="var(--blue-4)",
                ),
                info_box(
                    title="Order",
                    output_id="species_order",
                    icon="📦",
                    color="var(--green-4)",
                ),
                width=1,
                height=3,
                shadowed=True,
            ),
            nRows=6,
            nCols=3,
        ),
        name="Main",
    ),
    sc.tab(
        # Make a grid with 4 rows and 3 columns
        sc.grid(
            # Blurb takes up 2 of 3 columns
            sc.grid_item(ui.p("These are the notable birds seen recently"), width=2),
            sc.grid_item(sc.output_data_grid("nearby_table"), width=2, height=3),
            nRows=4,
            nCols=2,
        ),
        name="Nearby",
        color_scheme="grape",
    ),
    sc.footer(ui.tags.span("Experimental Shiny"), Tag("theme-chooser")),
    ui.div(
        sc.avatar(
            name="My Account",
            src="profile-photo.jpg",
            variant="circle",
            size="50",
        ),
        slot="header-right",
    ),
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

        bird = species_to_id[input.species()]
        # Get nearby records for the past 3 days
        records = get_nearby_species(
            api_key,
            bird,
            *ann_arbor_lat_lon,
            dist=input.radius(),
            back=input.days_back(),
        )

        return pd.DataFrame.from_records(records)

    @reactive.Effect
    def update_map():
        records = ebird_results()

        markers_for_records = []
        for record_index in range(len(records)):
            center = (records["lat"][record_index], records["lng"][record_index])
            location = records["locName"][record_index]
            marker = L.Marker(location=center, draggable=False, title=location)
            markers_for_records.append(marker)

        bird_markers.clear_layers()
        bird_marker_cluster = L.MarkerCluster(markers=markers_for_records)
        bird_markers.add_layer(bird_marker_cluster)

    @reactive.Calc
    def species_info():
        species = species_to_id[input.species()]
        bird_info = get_taxonomy(api_key, species=species)
        return bird_info[0]

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

    @reactive.Calc
    def ebird_nearby() -> pd.DataFrame:
        """Returns a Pandas data frame that includes only the desired rows"""
        # Get nearby records for the past 3 days
        records = get_nearby_observations(
            api_key, *ann_arbor_lat_lon, dist=input.radius(), back=input.days_back()
        )

        return pd.DataFrame.from_records(records)

    @output
    @sc.data_grid(height="500px", row_selection=True)
    def results_table():
        return ebird_results()

    @output
    @sc.data_grid(height="500px", row_selection=True)
    def nearby_table():
        return ebird_nearby()

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
