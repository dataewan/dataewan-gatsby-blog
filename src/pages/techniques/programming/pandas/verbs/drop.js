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

import rawdata from "raw-loader!./_rawdata.html";
import drop1 from "raw-loader!./_drop1.html";

class DropVerb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Section name="drop">
          <Paragraph
            note={
              <a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.drop.html">
                pandas documentation
              </a>
            }
          >
            Use drop to remove labels from an axis. Most of the time you use
            this to remove columns from a dataframe. Use the titanic dataset to
            illustrate. Here's the raw data.
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
          <Subsection name="remove columns">
            <Paragraph>
              Use the <span className="mono">drop</span> function to remove
              columns from your data frame. Pass the list of column names in as
              the first argument, and set <span className="mono">axis=1</span>{" "}
              to make it apply this over your column names. Returns a copy of
              the data frame with those columns removed.
            </Paragraph>
            <Code
              language="python"
              code={`
(
    df
    .drop(['sibsp', 'parch'], axis=1)
).head(5)
          `}
            />
            <RawHTML>{drop1}</RawHTML>
          </Subsection>
        </Section>
      </Layout>
    );
  }
}

export default DropVerb;
