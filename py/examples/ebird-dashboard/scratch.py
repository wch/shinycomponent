import os

import pandas as pd
from ebird.api import get_nearby_species, get_taxonomy

api_key = os.environ["EBIRD_API_KEY"]

ann_arbor_lat_lon = [42.273991, -83.754550]
radius_mi = 10
days_back = 3

# Eastern Wood-Pewee
bird = "eawpew"

bird_info = get_taxonomy(api_key, species="eawpew")


# Get nearby records for the past 3 days
records = get_nearby_species(
    api_key, bird, *ann_arbor_lat_lon, dist=radius_mi, back=days_back
)

# Load array of lists into a DataFrame
df = pd.DataFrame.from_records(records)

print(df)

# Get observations from Woodman Pond, Madison county, New York for the past week.
# records = get_observations(api_key, "L227544", back=7)
print(records)
