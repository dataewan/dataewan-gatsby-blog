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
import sort_values1 from "raw-loader!./_sortvalues1.html"
import sort_values2 from "raw-loader!./_sortvalues2.html"


class SortValuesVerb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Section name="sort_values">
          <Paragraph
            note={
              <a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.sort_values.html">
                pandas documentation
              </a>
            }
          >
            Use this function to order the rows in your dataframe. Useful if you
            want to quickly see the top results. Going to use the titanic
            dataset to illustrate. Here's the raw data.
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
          <Subsection name="Sorting dataframe values">
            <Paragraph>
              Use the <span className="mono">sort_values</span> to order your
              dataframe. The <span className="mono">ascending</span> parameter
              can be used to reverse the order of results. This chain the 5
              oldest people in the dataset.
            </Paragraph>
            <Code
              language="python"
              code={`
(
    df
    .sort_values('age', ascending=False)
).head(5)
          `}
            />
            <RawHTML>{sort_values1}</RawHTML>
          </Subsection>
          <Subsection name="Custom sort pandas dataframes">
            <Paragraph
              note={
                <a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Categorical.html">
                  pandas documentation
                </a>
              }
            >
              The default order isn't always what you want to sort your
              dataframe by, you might want to specify an order. A fairly
              straightforward way to do this is to use{" "}
              <span className="mono">pd.Categorical</span>. These are a bit like
              factors in R, and give you a way to represent a categorical
              variable in your dataset. Here we'll order the embarkation points
              by a custom order, rather than the default alphabetical. Combining
              this with the <a href="./assign">assign</a> verb as well.
            </Paragraph>
            <Code
              language="python"
              code={`
df
.assign(embark_categorical = pd.Categorical(
    df.embark_town,
    ['Southampton', 'Cherbourg', 'Queenstown']
))
.sort_values('embark_categorical')
          `}
            />
            <RawHTML>{sort_values2}</RawHTML>
          </Subsection>
        </Section>
      </Layout>
    );
  }
}

export default SortValuesVerb;
