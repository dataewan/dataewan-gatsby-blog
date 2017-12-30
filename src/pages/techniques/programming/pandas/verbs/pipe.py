
import pandas as pd
movies = pd.read_csv('~/data/tmdb/movies.csv')

def outputhtml(df, filename):
    with open(filename, 'w') as f:
        f.write(df.to_html())

def output(df, section_number):
    filename = '_pipe{num}.html'.format(num=section_number)
    outputhtml(df, filename)


# section 1, applying two arbitrary operations

def convert_date(x):
    return (
        x
        .assign(date = pd.to_datetime(x.release_date))
    )

def extract_year(x):
    return (
        x
        .assign(yr = x.date.dt.year)
    )

# instead of writing
_ = (
extract_year(convert_date(movies))
)

# you can write
_ = (
    (
        movies
        .pipe(convert_date)
        .pipe(extract_year)
    )
)

output(_.head(), 1)


# section 2, working with mutated dataframes

try:
    _ = (
        movies
        .assign(date = pd.to_datetime(movies.release_date))
        .assign(month = movies.date.dt.month)
    )
    # Fails with AttributeError: 'DataFrame' object has no attribute 'date'
except:
    pass

_ = (
    movies
    .pipe(lambda x: x.assign(date = pd.to_datetime(x.release_date)))
    .pipe(lambda x: x.assign(month = x.date.dt.month))
)

output(_.head(5), 2)
