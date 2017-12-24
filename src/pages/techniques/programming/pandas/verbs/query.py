import pandas as pd
import seaborn as sns

df = sns.load_dataset('titanic')
with open('_rawdata.html', 'w') as f:
    f.write(df.head(5).to_html())

def output(df, section_number):
    filename = '_query{num}.html'.format(num=section_number)
    with open(filename, 'w') as f:
        f.write(df.to_html())


# section 1
_ = (
    (
        df
        .query('age > 30')
    ).head(5)
)
output(_, 1)
   
# section 2
_ = (
    (
        df
        .query('(pclass == 3 | pclass == 1) & embark_town == "Cherbourg" ').head(5)
    )
)
output(_, 2)

# section 3
def querySurvived(x, survived):
    return (
        x
        .query('survived == @survived')
    )


_ = (
    querySurvived(df, 1)
    .head(5)
)
output(_, 3)
