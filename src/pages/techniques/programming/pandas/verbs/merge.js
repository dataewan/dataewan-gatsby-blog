import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Section,
  Subsection,
  Subsubsection,
  Figure,
  Paragraph,
  Code,
  RawHTML,
  Layout
} from "../../../../../components";

import movies from "raw-loader!./_movies.html"
import cast from "raw-loader!./_cast.html"
import crew from "raw-loader!./_crew.html"
import merge1 from "raw-loader!./_merge1.html"
import merge2 from "raw-loader!./_merge2.html"
import merge3 from "raw-loader!./_merge3.html"

class MergeVerb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Section name="merge">
          <Paragraph
            note={
              <a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.merge.html">
                pandas documentation
              </a>
            }
          >
            Merge is a lot like the <span className="mono">JOIN</span> operation
            in SQL. You use it to join together dataframe that contain a common
            key. The common key is a column in each dataframe that you can use
            to look up between the dataframes, some sort of identifier.
          </Paragraph>
          <Paragraph
            note={
              <a href="https://gist.github.com/dataewan/9e3eb3fee268b1eb4a629fd216e20712">
                where the data comes from
              </a>
            }
          >
            I'm going to use three dataframes for this that contain information
            about movies. There are dataframes named{" "}
            <span className="mono">movies</span>,{" "}
            <span className="mono">cast</span>, and{" "}
            <span className="mono">crew</span>.
          </Paragraph>
          <Figure caption="Movies dataframe" fullwidth={true}>
            <RawHTML>{movies}</RawHTML>
          </Figure>
          <Figure caption="Cast dataframe" fullwidth={true}>
            <RawHTML>{cast}</RawHTML>
          </Figure>
          <Figure caption="Crew dataframe" fullwidth={true}>
            <RawHTML>{crew}</RawHTML>
          </Figure>
          <Paragraph>
            Note that there is an <span className="mono">id</span> column in the
            movies dataframe. This matches the{" "}
            <span className="mono">movie_id</span> column in the cast and crew
            dataframes.
          </Paragraph>
          <Subsection name="Joins in pandas">
            <Code
              language="python"
              code={`
(
    # first a subquery to get all the Christopher Nolan directed films
    crew
    .query('job == "Director"')
    .query('name == "Christopher Nolan"')
    # now join with the movies and get their titles
    .merge(
        movies,
        left_on='movie_id',
        right_on='id'
    )
    [['title', 'release_date']]
)
          `}
            />
            <RawHTML>{merge1}</RawHTML>
            <Subsubsection name="left, right, inner, outer">
              <Paragraph>
                By default pandas does an inner join. This means that only rows
                in both the dataframes are returned. The{" "}
                <span className="mono">how</span> parameter lets you do
                different sorts of joins. This (slightly contrived) example
                returns any years that either Susan Sarandon or Steven Spielberg
                made a film. This is an outer join, because we want rows that
                are present in either.
              </Paragraph>
              <Code
                language="python"
                code={`
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
            `}
              />
              <RawHTML>{merge2}</RawHTML>
            </Subsubsection>
          </Subsection>
          <Subsection name="Checking your merges">
            <Paragraph>
              A nice feature introduced in pandas 0.21 is the ability to
              validate your merges, using the{" "}
              <span className="mono">validate</span> parameter. Sometimes you
              know that there should be only one matching row in the dataframe
              you're joining. For example, I thought there would only be one
              director for each film. Putting in the validation told me that I
              was wrong.
            </Paragraph>
            <Code
              language="python"
              code={`
directors = (
    crew
    .query('job == "Director"')
)

(
    movies
    .merge(
        directors,
        left_on='id',
        right_on='movie_id',
        validate='1:1'
    )
)

# This fails with a MergeError
          `}
            />
            <Paragraph>
              That code fails. Looking into the data a bit more, I see that my
              assumption was incorrect. Some films have multiple directors, and{" "}
              <a href="https://en.wikipedia.org/wiki/Paris,_je_t%27aime">
                Paris, je t'aime
              </a>{" "}
              has 21! I might have to put logic further along in my analysis to
              catch these cases.
            </Paragraph>
            <Code
              language="python"
              code={`
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
          `}
            />
            <RawHTML>{merge3}</RawHTML>
            <Paragraph>
              This is very useful if you are working with messy data, or if you
              want to apply your code to new data in the future. It helps you
              validate that your assumptions about the structure of the data are
              correct. It makes your code more resilient.
            </Paragraph>
          </Subsection>
        </Section>
      </Layout>
    );
  }
}

export default MergeVerb;
