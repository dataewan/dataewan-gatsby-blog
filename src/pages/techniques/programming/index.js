import React, { Component} from 'react';

import { Section, Paragraph, Linktree, Linknode, Layout
} from '../../../components/'

class ProgrammingIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
      <Section name='Programming'>
        <Linktree>
          <Linknode to='/techniques/programming/d3' desc="Using D3 for data visualisation"/>
          <Linknode to='/techniques/programming/pandas' desc="The pandas library, manipulating data in python"/>
        </Linktree>
      </Section>
    </Layout>
    );
  }
}

export default ProgrammingIndex;
