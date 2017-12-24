
import pandas as pd
import seaborn as sns

df = sns.load_dataset('titanic')

def output(df, section_number):
    filename = '_rename{num}.html'.format(num=section_number)
    with open(filename, 'w') as f:
        f.write(df.to_html())

# section 1
_ = (
    (
        df
        .rename(columns={
            'pclass': 'passenger_class',
            'sibsp': 'siblings_onboard',
            'parch': 'parents_children_onboard'
        })
    ).head(5)
)
output(_, 1)

