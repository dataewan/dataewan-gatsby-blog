import React, { Component} from 'react';
import PropTypes from 'prop-types';

import {
  Section, Subsection, Subsubsection, Figure, Paragraph, Code, RawHTML
} from '../../../../../components';

class GroupByVerb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section name='groupby'>
        <Paragraph note={<a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.groupby.html">pandas documentation</a>}>
          <span className='mono'>groupby</span> lets you perform aggregations of your data.
          It is similar to the SQL <span className='mono'>GROUP BY</span> operation.
          I'll use the iris dataset to demonstrate,
          here's a sample of that data.
        </Paragraph>
        <RawHTML>
          {require('./_iris.html')}
        </RawHTML>
        <Paragraph>
          Usually perform the grouping by passing in a list of columns that you want to group by.
          Here I'll just group by a single column, but you can easily add in multiple.
        </Paragraph>
        <Code language='python' code={`
(
    df
    .groupby(['species'])
)

# returns <pandas.core.groupby.DataFrameGroupBy object at 0x1065c37f0>
        `} />
        <Paragraph note={<a href="https://pandas.pydata.org/pandas-docs/stable/groupby.html">pandas documentation</a>}>
          There is a good section in the pandas documentation about the operations you can perform on a groupby object.
          I'm just going to extract the bits that I use a lot and have to look up.
        </Paragraph>
        <Subsection name='Performing aggregations'>
          <Paragraph>
            Most frequently you want to aggregate up your group somehow.
            Here I'll take the mean of all the numeric columns in my groups.
          </Paragraph>
        <Code language='python' code={`
(
    df
    .groupby(['species'])
    .agg(np.mean)
)
        `} />
        <RawHTML>
          {require('./_groupby2.html')}
        </RawHTML>
        <Paragraph>
          You can also specify particular aggregation functions to different columns in the group.
          You do this by passing in a dictionary to the agg function.
          Here I'll take the mean of the sepal_length,
          and take the max of the sepal_width.
        </Paragraph>
        <Code language='python' code={`
(
    df
    .groupby(['species'])
    .agg({
        'sepal_length': np.mean,
        'sepal_width': np.max
    })
)
        `} />
        <RawHTML>
          {require('./_groupby3.html')}
        </RawHTML>
        </Subsection>
        <Subsection name='Applying function to each group'>
          <Paragraph note={<a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.core.groupby.GroupBy.transform.html">pandas documentation</a>}>
            The <span className='mono'>transform</span> function applies a function over the group and returns a transformed version of that group.
            The output has the same number of observations as go into the function.
            I've used it to calculate the <a href="https://en.wikipedia.org/wiki/Standard_score">z-score</a> of all the observations in the data frame.
          </Paragraph>
        <Code language='python' code={`
(
    df
    .groupby(['species'])
    .transform(
        # formula for the z score
        lambda x: (x - x.mean()) / x.std()
    )
)
        `} />
        <RawHTML>
          {require('./_groupby4.html')}
        </RawHTML>
        <Paragraph>
          To perform more complex aggregations, you usually want to write a function that does that aggregation.
          It should return a dataframe, a series, or scalar.
          The apply function will figure out how to join them all back together into a dataframe.
        </Paragraph>
        <Code language='python' code={`
def summarise(x):
    return pd.Series({
        'sepal_length_max': x.sepal_length.max(),
        'sepal_length_min': x.sepal_length.min()
    })

(
    df
    .groupby(['species'])
    .apply(summarise)
)

        `} />
        <RawHTML>
          {require('./_groupby5.html')}
        </RawHTML>
        <Paragraph>
          This is very flexible, but will be slower than the aggregate or transform functions.
          Note that this will apply the function twice to the first group.
          If you're applying a function with side effects,
          for example writing results out to a file, 
          you might get unexpected results.
        </Paragraph>
        </Subsection>
        <Subsection name='Grouping by without an index'>
          <Paragraph>
            When you do a group by, it creates an index on the output from the columns you've grouped by.
            This can be fiddly for subsequent operations that expect a plain dataframe.
            Either you can use the <span className='mono'>reset_index()</span> function to remove the index,
            or you can pass the <span className='mono'>as_index=False</span> argument to the groupby.
          </Paragraph>
        <Code language='python' code={`
(
    df
    .groupby(['species'], as_index=False)
    .agg({
        'sepal_length': np.mean,
        'sepal_width': np.max
    })
)
        `} />
        <RawHTML>
          {require('./_groupby6.html')}
        </RawHTML>
        <Paragraph>
          That looks pretty much the same as the grouping from above,
          but note that the grouping column (species) doesn't appear in the index column any more.
        </Paragraph>
        </Subsection>
      </Section>
    );
  }
}

export default GroupByVerb;
