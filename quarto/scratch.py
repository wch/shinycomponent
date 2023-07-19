import json
from pathlib import Path

import pandas as pd

# Load ebird-data.csv into a pandas dataframeget_records
ebird_data = pd.read_csv(Path(__file__).parent / "example_data/ebird-data.csv")


# Read in the json file to a dictionary
with open(Path(__file__).parent / "example_data/species-taxonomy.json", "r") as f:
    species_taxonomy = json.load(f)


# Find most common species by number of rows in dataframe with that comName column value
most_common_species = (
    ebird_data.groupby("comName").size().sort_values(ascending=False).index[0]
)


# Find row with the largest value for howMany column
largest_sighting = ebird_data.sort_values("howMany", ascending=False).iloc[0]

# String with format of "Species: {comName}"
largest_sighting_species = f"Species: {largest_sighting['comName']}"

# String with format of "{howMany} {comName} seen" where {howMany} is formatted as an integer
largest_sighting_how_many = (
    f"{int(largest_sighting['howMany'])} {largest_sighting['comName']}s seen"
)

import matplotlib.dates as mdates

# Bar Plot showing number of sightings by day of data (obsDt column)
import matplotlib.pyplot as plt

sightings_by_day = (
    ebird_data.groupby("obsDt")
    .size()
    .reset_index(name="count")
    .sort_values("obsDt")
    .set_index("obsDt")
)

import matplotlib.dates as mdates

# Only show every 7th date on the x-axis
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.bar(sightings_by_day.index, sightings_by_day["count"])
ax.xaxis.set_major_locator(mdates.DayLocator(interval=28))
ax.xaxis.set_major_formatter(mdates.DateFormatter("%m/%d"))
ax.set_ylabel("Number of Sightings")
plt.xticks(rotation=45, ha="right")
plt.show()
