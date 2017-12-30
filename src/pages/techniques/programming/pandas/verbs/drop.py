
import pandas as pd
import seaborn as sns

df = sns.load_dataset('titanic')

def output(df, section_number):
    filename = '_drop{num}.html'.format(num=section_number)
    with open(filename, 'w') as f:
        f.write(df.to_html())

# section 1
_ = (
    (
        df
        .drop(['sibsp', 'parch'], axis=1)
    ).head(5)
)
output(_, 1)
