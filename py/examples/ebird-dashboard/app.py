#
# EBird Dashboard
#
import os
from pathlib import Path

import pandas as pd
import seaborn as sns
import shiny.experimental as x
from ebird.api import get_nearby_observations, get_nearby_species, get_taxonomy
from htmltools import Tag
from shiny import App, Inputs, Outputs, Session, reactive, render, ui

import shinycomponent as sc

sns.set_theme()


www_dir = Path(__file__).parent.resolve() / "www"

species_to_id = {
    "Eastern Wood-Pewee": "eawpew",
    "Wood Duck": "wooduc",
}

api_key = os.environ["EBIRD_API_KEY"]

ann_arbor_lat_lon = [42.273991, -83.754550]
radius_mi = 10
days_back = 3

# Eastern Wood-Pewee
bird = "eawpew"


def info_box(title: str, output_id: str, icon: str, color: str):
    return x.ui.value_box(
        title,
        ui.output_text(output_id, container=ui.h3),
        showcase=ui.h2(icon),
        theme_color=None,
        style=f"background-color: {color};",
        height="90px",
        full_screen=True,
    )


app_ui = sc.page(
    Tag(
        "shiny-logip-tabset",
        sc.tab(
            # Make a grid with 4 rows and 3 columns
            sc.grid(
                # Blurb takes up 2 of 3 columns
                sc.grid_item(
                    sc.grid(
                        sc.forge.input_select(
                            id="species",
                            label="Species",
                            choices=["Eastern Wood-Pewee", "Wood Duck"],
                            selected="Eastern Wood-Pewee",
                        ),
                        ui.div(
                            "Days back to look",
                            sc.simple_number_input(
                                "days_back",
                                value=3,
                                min=1,
                                max=100,
                            ),
                            style="display: grid;place-content: center;padding-block:var(--size-2);",
                        ),
                        ui.div(
                            "Distance from Ann Arbor",
                            sc.simple_number_input(
                                "radius",
                                value=10,
                                min=1,
                                max=100,
                            ),
                            style="display: grid;place-content: center;",
                        ),
                        nRows=1,
                        nCols=3,
                        alignItems="center",
                    ),
                    width=2,
                    shadowed=True,
                ),
                sc.grid_item(
                    ui.output_text("results_blurb"),
                    width=1,
                    shadowed=True,
                    centercontent=True,
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
                # Value boxes are 4 rows tall
                # sc.grid_item(ui.output_text("results_blurb")),
                sc.grid_item(
                    sc.output_data_grid("results_table"),
                    width=2,
                    height=3,
                    shadowed=True,
                ),
                nRows=4,
                nCols=3,
            ),
            name="Main",
        ),
        sc.tab(
            # Make a grid with 4 rows and 3 columns
            sc.grid(
                # Blurb takes up 2 of 3 columns
                sc.grid_item(
                    ui.p("These are the notable birds seen recently"), width=2
                ),
                sc.grid_item(sc.output_data_grid("nearby_table"), width=3, height=3),
                nRows=4,
                nCols=3,
            ),
            name="Notable",
        ),
        Tag(
            "shiny-section",
            Tag("posit-logo", withName=True, slot="icon"),
            ui.h2("EBird!"),
            slot="title",
        ),
    ),
)


def server(input: Inputs, output: Outputs, session: Session):
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

    @reactive.Calc
    def ebird_nearby() -> pd.DataFrame:
        """Returns a Pandas data frame that includes only the desired rows"""
        # Get nearby records for the past 3 days
        records = get_nearby_observations(
            api_key, *ann_arbor_lat_lon, dist=input, back=days_back
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
    def num_results():
        return len(ebird_results())

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
        days_back_text = (
            f"in the past {input.days_back()} {'day' if days_back == 1 else 'days'}"
        )

        if num_results == 0:
            return f"There have been no observations of {species}s {location_text} {days_back_text}"

        return f"{num_results_text} of {species} {location_text} {days_back_text}"


app = App(
    app_ui,
    server,
    static_assets=str(www_dir),
)
