import pandas as pd
import seaborn as sns
import numpy as np

def outputhtml(df, filename):
    with open(filename, 'w') as f:
        f.write(df.to_html())

def output(df, section_number):
    filename = '_groupby{num}.html'.format(num=section_number)
    outputhtml(df, filename)

df = sns.load_dataset('iris')
outputhtml(df.sample(5), '_iris.html')


# section 1

(
    df
    .groupby(['species'])
)

# returns <pandas.core.groupby.DataFrameGroupBy object at 0x1065c37f0>

# section 2

_ = (
(
    df
    .groupby(['species'])
    .agg(np.mean)
)
)

output(_, 2)

# section 3

_ = (
(
    df
    .groupby(['species'])
    .agg({
        'sepal_length': np.mean,
        'sepal_width': np.max
    })
)
)

output(_, 3)

# section 4

_ = (
(
    df
    .groupby(['species'])
    .transform(
        # formula for the z score
        lambda x: (x - x.mean()) / x.std()
    )
)
).head(5)

output(_, 4)

# section 5

def summarise(x):
    return pd.Series({
        'sepal_length_max': x.sepal_length.max(),
        'sepal_length_min': x.sepal_length.min()
    })


_ = (
(
    df
    .groupby(['species'])
    .apply(summarise)
)
)

output(_, 5)

# section 6

_ = (
(
    df
    .groupby(['species'], as_index=False)
    .agg({
        'sepal_length': np.mean,
        'sepal_width': np.max
    })
)
)

output(_, 6)
