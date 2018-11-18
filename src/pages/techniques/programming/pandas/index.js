import React, { Component} from 'react';

import {
  Section, Subsection, Paragraph, Code, BlockQuote, Linktree, Linknode, Layout
} from '../../../../components/'

class PandasIndex extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
      <article>
        <Paragraph note={
          <div>
            <a href="http://shop.oreilly.com/product/0636920023784.do">Python for data analysis</a>
            <br />
            <a href="https://tomaugspurger.github.io/modern-1-intro.html">Tom Augspurger</a>
          </div>
        }>
        The two best sources I've found for learning about pandas are the <i>Python for data analysis</i> book,
        and the <i>Modern Pandas</i> blog posts from Tom Augspurger.
        I like to work throught the Modern Pandas blog posts every few months to refresh myself.

        </Paragraph>
        <Section name="Writing clean pandas">
          <Paragraph>
            Writing pandas code this way makes it easier to understand complex data processing pipelines.
          </Paragraph>
          <Subsection name="Method chaining">
            <Paragraph>
              <a href="https://en.wikipedia.org/wiki/Method_chaining">
                Method chaining</a> technique allows you to apply multiple functions to your data frame.
              If I have three functions (preprocess, aggregate, postprocess) that I want to apply to my dataframe in order.
              The idea is that instead of writing code like this:
            </Paragraph>
              <Code language='python' code={`
result = postprocess(aggregate(preprocess(df)))
              `} />
            <Paragraph>
              You start writing code like this:
            </Paragraph>
            <Code language='python' code={`
results = df.preprocess().aggregate().postprocess()
            `} />
            <Paragraph>
              This works if each of the functions are part of the <span className="mono">df</span> object,
              and each of the functions returns an adjusted <span className="mono">df</span> object.
              This technique is <a href="http://pandas.pydata.org/pandas-docs/stable/basics.html#tablewise-function-application">encouraged</a> by pandas.
              Many of the functions that are part of the Pandas dataframe object work in this way:
              they return an adjusted copy of the original dataframe.
              I'll talk about using these dataframe functions in the <a href='#dataverbs'>data verbs</a> section below.
            </Paragraph>
          </Subsection>
          <Subsection name="Wrap long lines">
            <BlockQuote source={"https://www.python.org/dev/peps/pep-0008/"} person="PEP8">
              The preferred way of wrapping long lines is by using Python's implied line continuation inside parentheses, brackets and braces. If necessary, you can add an extra pair of parentheses around an expression, but sometimes using a backslash looks better. Make sure to indent the continued line appropriately. The preferred place to break around a binary operator is after the operator, not before it.
            </BlockQuote>
            <Paragraph>
              Having super long lines in your code makes it hard to read.
              Using the recommendation from PEP8,
              we can use parentheses to wrap our long lines up.
            </Paragraph>
            <Code language='python' code={`
results = (
  df
  .preprocess()
  .aggregate()
  .postprocess()
)
`} />
          </Subsection>
          <Subsection name="Data verbs">
            <Linktree>
              <Linknode to='techniques/programming/pandas/verbs/query' desc='Filter the dataframe' />
              <Linknode to='techniques/programming/pandas/verbs/assign' desc='Create new columns, or adjust existing values' />
              <Linknode to='techniques/programming/pandas/verbs/rename' desc='Rename columns' />
              <Linknode to='techniques/programming/pandas/verbs/drop' desc='Delete columns' />
              <Linknode to='techniques/programming/pandas/verbs/sort_values' desc='Order your dataframe' />
              <Linknode to='techniques/programming/pandas/verbs/merge' desc='Join onto other dataframes' />
              <Linknode to='techniques/programming/pandas/verbs/groupby' desc='Perform aggregations' />
              <Linknode to='techniques/programming/pandas/verbs/pipe' desc='Apply arbitrary functions' />
            </Linktree>
          </Subsection>
        </Section>
      </article>
    </Layout>
    );
  }
}

export default PandasIndex;
