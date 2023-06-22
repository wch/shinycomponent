# This script is used to gather data from the ebird API for use in the ebird-dashboard
# example app. By scraping this data beforehand the app is usable to anyone without
# requiring an API key.
#
# If you wish to run this data scraping yourself you _will_ need an API key from https://ebird.org/api/keygen
# Once you have that you can replace the line `api_key` with that value or more securely
# set the environment variable `EBIRD_API_KEY` to that value.

import json
import os

import pandas as pd
from ebird.api import get_nearby_observations, get_nearby_species, get_taxonomy
from geopy import distance

api_key = os.environ["EBIRD_API_KEY"]

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

radius_mi = 20

days_back = 30


def get_records_for_species(species: str):
    bird = species_to_id[species]
    # Get nearby records for the past 3 days
    return pd.DataFrame.from_records(
        get_nearby_species(
            api_key,
            bird,
            *ann_arbor_lat_lon,
            dist=radius_mi,
            back=days_back,
        )
    )


all_species_records = pd.concat(
    [get_records_for_species(species) for species in species_names]
)

# Add new row to the dataframe with how many days back the date in column "obsDt" is from today
all_species_records["days_back"] = (
    pd.to_datetime("today") - pd.to_datetime(all_species_records["obsDt"])
).dt.days


# Add a new column to the dataframe that tells how far the observation is from ann_arbor_lat_lon in miles based on the columns "lat" and "lng"
all_species_records["distance_mi"] = all_species_records.apply(
    lambda row: distance.distance(ann_arbor_lat_lon, (row["lat"], row["lng"])).miles,
    axis=1,
)

# Get rid of the columns "locId", "obsValid", "obsReviewed", "locationPrivate", "subId", and "exoticCategory" from the all_species_records dataframe
all_species_records = all_species_records.drop(
    columns=["locId", "obsValid", "obsReviewed", "locationPrivate", "subId"]
)

# Write out the dataframe to a csv file named "ebird-data.csv"
all_species_records.to_csv("py/examples/ebird-dashboard/ebird-data.csv", index=False)

# Loop over all the species and get their taxonomy information from the ebird api
# This is a list of dictionaries
species_taxonomy = {}
for species_name, species_id in species_to_id.items():
    species_taxonomy[species_name] = get_taxonomy(api_key, species=species_id)[0]

# Export the species_taxonomy dictionary to a json file
with open("py/examples/ebird-dashboard/species-taxonomy.json", "w") as f:
    json.dump(species_taxonomy, f)
