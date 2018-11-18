import React, { Component} from 'react';
import PropTypes from 'prop-types';

import typography from "../../../utils/typography"

import {
  Section, Subsection, Paragraph, Figure, Code, BlockQuote, Linktree, Linknode, Layout
}from "../../../components"

class IndexPage extends Component {
  render() {
    console.log(typography)
    return (
      <Layout>
      <article>
        <Section name="This explaination format">
          <Paragraph>
            I'm using this format to make explainations.
            It uses <a href="https://reactjs.org/">react</a> and <a href="http://gatsbyjs.org/">gatsby.js</a> to explain things.
            There are quite a few advantages of using this format.
            <ul css={{
              paddingTop: typography.rhythm(1)
            }}>
              <li>The information is held in a hierarchy, making it easier to navigate and digest in smaller chunks</li>
              <li>The explainations can be interactive. An explaination you can play with is often easier to understand</li>
              <li>They are accessible anywhere with an internet connection</li>
            </ul>
          </Paragraph>
          <Paragraph>
            The downside is that it takes more time and effort to explain something using this format.
            You're writing a lot of code.
            I'm finding this quite good,
            as it makes you think hard about what to include in the explaination.
          </Paragraph>
          <Linktree>
            <Linknode to='/techniques/explaining-things/react' desc="Describing how I use react in this format"/>
            <Linknode to='/techniques/explaining-things/components' desc="Different components developed to help explain"/>
          </Linktree>
        </Section>
      </article>
    </Layout>
    );
  }
}

export default IndexPage;
