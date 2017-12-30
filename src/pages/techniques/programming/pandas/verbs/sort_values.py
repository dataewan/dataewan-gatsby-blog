
import pandas as pd
import seaborn as sns

df = sns.load_dataset('titanic')

def output(df, section_number):
    filename = '_sortvalues{num}.html'.format(num=section_number)
    with open(filename, 'w') as f:
        f.write(df.to_html())


# section 1
_ = (
    (
        df
        .sort_values('age', ascending=False)
    ).head(5)
)
output(_, 1)


# section 2
_ = (
    (
        df
        .assign(embark_categorical = pd.Categorical(
            df.embark_town,
            ['Southampton', 'Cherbourg', 'Queenstown']
        ))
        .sort_values('embark_categorical')
    ).head(5)
)
output(_, 2)
