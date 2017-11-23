import React, { Component} from 'react';
import PropTypes from 'prop-types';

import typography from "../../../utils/typography"

import {
  Section, Subsection, Paragraph, Figure, Code, BlockQuote, Linktree, Linknode
}from "../../../components"

class IndexPage extends Component {
  render() {
    console.log(typography)
    return (
      <article>
        <Section name="Coding an explaination">
          <Paragraph>
            I find using code to create these explainations a helpful technique.
            <ul css={{
              paddingTop: typography.rhythm(1)
            }}>
              <li>The information is held in a hierarchy, making it easier to navigate and digest in smaller chunks</li>
              <li>The explainations can be interactive. An explaination you can play with is often easier to understand</li>
              <li>They are accessible anywhere with an internet connection</li>
            </ul>
            You do have to take more time to do things this way, but I like it a lot.
          </Paragraph>
          <Linktree>
            <Linknode to='/explaining-things/react' desc="Describing how to use react to explain a thing"/>
            <Linknode to='/explaining-things/components' desc="Different components developed to help explain"/>
          </Linktree>
        </Section>
      </article>

    );
  }
}

export default IndexPage;
