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
import assign1 from "raw-loader!./_assign1.html"
import assign2 from "raw-loader!./_assign2.html"
import assign3 from "raw-loader!./_assign3.html"

class AssignVerb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Section name="assign">
          <Paragraph
            note={
              <a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.assign.html">
                pandas documentation
              </a>
            }
          >
            Assign is used in pandas to make new columns in your dataframe. I'm
            going to use the titanic dataset from seaborn to illustrate. Here's
            my raw data.
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
          <Subsection name="Making new columns">
            <Paragraph>
              Use the <span className="mono">assign</span> verb to create new
              columns in your dataframe.
            </Paragraph>
            <Code
              language="python"
              code={`
(
    df
    .assign(halfage = df.age / 2)
).head(5)
          `}
            />
            <RawHTML>{assign1}</RawHTML>
          </Subsection>
          <Subsection name="Cleaning data">
            <Paragraph>
              You can overwrite data in an existing column. Useful if the data
              is messy and you want to clean it.
            </Paragraph>
            <Code
              language="python"
              code={`
(
    df
    .assign(age = df.age.fillna(0.0))
).head(5)
          `}
            />
            <RawHTML>{assign2}</RawHTML>
          </Subsection>
          <Subsection name="Multiple columns">
            <Paragraph>
              You can assign to multiple columns by passing the columns as
              keyword arguments.
            </Paragraph>
            <Code
              language="python"
              code={`
(
    df
    .assign(age = df.age.fillna(0.0),
            halfage = df.age / 2,
            fclass_male = (df['class'] == "First") & (df.sex == 'male'))
).head(5)
          `}
            />
            <RawHTML>{assign3}</RawHTML>
          </Subsection>
        </Section>
      </Layout>
    );
  }
}

export default AssignVerb;
