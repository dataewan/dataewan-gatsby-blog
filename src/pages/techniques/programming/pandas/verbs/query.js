import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Section,
  Subsection,
  Paragraph,
  Code,
  RawHTML,
  Layout
} from "../../../../../components";

import rawdata from "raw-loader!./_rawdata.html"
import query1 from "raw-loader!./_query1.html"
import query2 from "raw-loader!./_query2.html"
import query3 from "raw-loader!./_query3.html"

class QueryVerb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Section name="query">
          <Paragraph
            note={
              <a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.query.html">
                pandas documentation
              </a>
            }
          >
            The query command is useful if you want to filter the rows of your
            data frame. It is similar to the SQL{" "}
            <span className="mono">WHERE</span> statement. I'm going to use the
            titanic dataset from seaborn to illustrate. Here's my raw data.
          </Paragraph>
          <Code
            language="python"
            code={`
import pandas as pd
import seaborn as sns

df = sns.load_dataset('titanic')
df.head(5)
          `}
          />
          <RawHTML>{rawdata}</RawHTML>

          <Subsection name="Filter rows pandas dataframe">
            <Paragraph>
              The simplest thing you can do with query is to use it to filter
              particular rows in the dataframe. Just pass a string through to
              the query function of the dataframe.
            </Paragraph>
            <Code
              language="python"
              code={`
  (
    df
    .query('age > 30')
  ).head(5)
            `}
            />
            <RawHTML>{query1}</RawHTML>
          </Subsection>

          <Subsection name="More complex logical statements">
            <Paragraph>
              You can combine statements with <span className="mono">|</span>{" "}
              and <span className="mono">&</span> for OR and AND.
            </Paragraph>
            <Code
              language="python"
              code={`
(
  df
  .query('(pclass == 3 | pclass == 1) & embark_town == "Cherbourg" ')
  .head(5)
)
            `}
            />
            <RawHTML>{query2}</RawHTML>
          </Subsection>

          <Subsection name="Using variables in query statements">
            <Paragraph>
              To use a variable in your query statement, prefix it with a @.
              This is often useful if you want to use a query in a function.
            </Paragraph>
            <Code
              language="python"
              code={`
def querySurvived(x, survived):
    return (
        x
        .query('survived == @survived')
    )


(
    querySurvived(df, 1)
    .head(5)
)
            `}
            />
            <RawHTML>{query3}</RawHTML>
          </Subsection>
        </Section>
      </Layout>
    );
  }
}

export default QueryVerb;
