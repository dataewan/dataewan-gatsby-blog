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
import rename1 from "raw-loader!./_rename1.html"

class RenameVerb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Section name="rename">
          <Paragraph
            note={
              <a href="https://pandas.pydata.org/pandas-docs/version/0.21/generated/pandas.DataFrame.rename.html">
                pandas documentation
              </a>
            }
          >
            Rename is used to change the names of labels on an axis. Most of the
            time I use this to rename columns. I'm going to use the titanic
            dataset from seaborn to illustrate. Here's my raw data.
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
          <Subsection name="Rename dataframe columns">
            <Paragraph>
              The main thing that I use this function for is to rename the
              columns of a pandas dataframe. Pass in a dictionary as the{" "}
              <span className="mono">columns</span> parameter, where the keys
              are the names of the columns before, and the values are the names
              of the columns after.
            </Paragraph>
            <Code
              language="python"
              code={`
(
    df
    .rename(columns={
        'pclass': 'passenger_class',
        'sibsp': 'siblings_onboard',
        'parch': 'parents_children_onboard'
    })
).head(5)
          `}
            />
            <RawHTML>{rename1}</RawHTML>
          </Subsection>
        </Section>
      </Layout>
    );
  }
}

export default RenameVerb;
