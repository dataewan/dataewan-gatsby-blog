import React, { Component} from 'react';
import PropTypes from 'prop-types';

import {
  Section, Subsection, Paragraph, Code, RawHTML
} from '../../../../../components';

class PipeVerb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section name="pipe">
        <Paragraph note={<a href='https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.pipe.html'>pandas documentation</a>}>
          All the other data verbs we've been using are functions that are part of the dataframe class.
          That set of verbs is very comprehensive, and covers most use cases.
          The <span className="mono">pipe</span> operation is a way for us to be more flexible,
          and perform any operation as a data verb.
          It applies the function to the dataframe, returning whatever the function returns.
        </Paragraph>
        <Paragraph note={<a href="https://gist.github.com/dataewan/9e3eb3fee268b1eb4a629fd216e20712">where the data comes from</a>}>
          I'll be using the movies dataframe.
          Here's a sample of that data.
        </Paragraph>
          <RawHTML >
            {require('./_movies.html')}
          </RawHTML>
        <Subsection name="Arbitrary operations, making your own verbs">
          <Paragraph>
            You can make your own functions that work like verbs.
            These take a dataframe and return a copy of that dataframe with some changes applied.
            Here I'm making two functions,
            one that converts a string formatted date to a pandas date,
            and a second one that extracts the year from that date. 
          </Paragraph>
        <Code language='python' code={`
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
          `} />
        <Paragraph>
          Instead of having to apply these functions like this:
        </Paragraph>
        <Code language='python' code={`
extract_year(convert_date(movies))
        `} />
        <Paragraph>
          I can use them in a chain like this:
        </Paragraph>
        <Code language='python' code={`
(
    movies
    .pipe(convert_date)
    .pipe(extract_year)
)
        `} />
          <Paragraph>
            This gives the same result, but is nicer pandas code.
          </Paragraph>
          <RawHTML >
            {require('./_pipe1.html')}
          </RawHTML>
        </Subsection>
        <Subsection name="Working with a mutated dataframe">
          <Paragraph>
            This is a specific use case of making your own verb,
            but is a very useful case.
            If you are making a chain that mutates the dataframe somehow,
            let's say that we're making a new column.
            If we want to use that new column in subsequent steps pandas will say that it can't find it.
            Here I'm making a new date column, which I want to take the month from.
          </Paragraph>
          <Code language='python' code={`
(
    movies
    .assign(date = pd.to_datetime(movies.release_date))
    .assign(month = movies.date.dt.month)
)
# Fails with AttributeError: 'DataFrame' object has no attribute 'date'
          `} />
          <Paragraph>
            If I'd been mutating in-place in the dataframe (assigning the new values to the release_date column),
            then the second row would try and work with the original column and not the mutated one.
            That can cause some tricky bugs.
          </Paragraph>
          <Paragraph>
            Instead we can use the pipe function to get access to the mutated columns in subsequent stages of the chain.
            I'm using <a href="https://dbader.org/blog/python-lambda-functions">lambda functions</a> here because I don't intend to use them again.
          </Paragraph>
          <Code language='python' code={`
(
    movies
    .pipe(lambda x: x.assign(date = pd.to_datetime(x.release_date)))
    .pipe(lambda x: x.assign(month = x.date.dt.month))
)
          `} />
          <Paragraph>
            This gives the intended result.
          </Paragraph>
          <RawHTML >
            {require('./_pipe2.html')}
          </RawHTML>
        </Subsection>
      </Section>
    );
  }
}

export default PipeVerb;
