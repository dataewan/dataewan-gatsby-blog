
import pandas as pd
import seaborn as sns

df = sns.load_dataset('titanic')

def output(df, section_number):
    filename = '_assign{num}.html'.format(num=section_number)
    with open(filename, 'w') as f:
        f.write(df.to_html())

# section 1
_ = (
    (
        df
        .assign(halfage = df.age / 2)
    ).head(5)
)
output(_, 1)

# section 2
_ = (
    (
        df
        .assign(age = df.age.fillna(0.0))
    ).head(5)
)
output(_, 2)

# section 3
_ = (
    (
        df
        .assign(age = df.age.fillna(0.0),
                halfage = df.age / 2,
                fclass_male = (df['class'] == "First") & (df.sex == 'male'))
    ).head(5)
)
output(_, 3)
