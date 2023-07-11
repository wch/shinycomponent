import os

import pandas as pd

# Print working directory
print(os.getcwd())
# Get path to this script

data = pd.read_csv("py/examples/static/riaa-us-revenue.csv")


# calculate the average revenue for all rows in the data
avg_rev = data["revenue"].mean()


# Calculate the most common type of "format"
most_common_format = data["format"].mode()[0]

# Calculate which format had the highest revenue in a single year
max_rev = data["revenue"].max()
max_rev_format = data[data["revenue"] == max_rev]["format"].values[0]

max_rev
max_rev_format

most_common_format
avg_rev
