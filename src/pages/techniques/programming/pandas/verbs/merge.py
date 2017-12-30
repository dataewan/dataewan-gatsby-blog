import pandas as pd

def putdateon(df):
    """Puts a date on the dataframe, and the year."""
    return (
        df
        .assign(release_date = pd.to_datetime(df.release_date))
        .pipe(lambda x: x.assign(year = x.release_date.dt.year))
    )

movies = putdateon(pd.read_csv('~/data/tmdb/movies.csv'))
cast = pd.read_csv('~/data/tmdb/cast.csv')
crew = pd.read_csv('~/data/tmdb/crew.csv')

def outputhtml(df, filename):
    with open(filename, 'w') as f:
        f.write(df.to_html())

# output the raw data to inclue in the writeup

outputhtml(movies.head(5), '_movies.html')
outputhtml(cast.head(5), '_cast.html')
outputhtml(crew.head(5), '_crew.html')

def output(df, section_number):
    filename = '_merge{num}.html'.format(num=section_number)
    outputhtml(df, filename)


# section 1
_ = (
    (
        crew
        .query('job == "Director"')
        .query('name == "Christopher Nolan"')
        .merge(
            movies,
            left_on='movie_id',
            right_on='id'
        )
        [['title', 'release_date']]
    )
)

output(_, 1)

# section 2

# get all the susan sarandon movies
sarandon = (
    cast
    .query('name == "Susan Sarandon"')
    .merge(movies,
           left_on='movie_id',
           right_on='id')
    [['name', 'title', 'year']]
)

# get all the steven spielberg movies
spielberg = (
    crew
    .query('job == "Director"')
    .query('name == "Steven Spielberg"')
    .merge(movies,
           left_on='movie_id',
           right_on='id')
    [['name', 'title', 'year']]
)

# perform the outer join
_ = (
    (
        sarandon
        .merge(
            spielberg,
            how='outer',
            on='year',
        )
        [['year', 'name_x', 'name_y']]
        .drop_duplicates()
        .sort_values('year')
    )
)

output(_, 2)


# section 3

directors = (
    crew
    .query('job == "Director"')
)

try:
    _ =(
        (
            movies
            .merge(
                directors,
                left_on='id',
                right_on='movie_id',
                validate='1:1'
            )
        )
        # This throws a MergeError
    )

except:
    pass


_ = (
(
    (
        movies
        .merge(
            directors,
            left_on='id',
            right_on='movie_id',
        )
    )
    .groupby('title')
    .agg({'name': 'count'})
    .sort_values('name')
)
).tail(5)

output(_, 3)
