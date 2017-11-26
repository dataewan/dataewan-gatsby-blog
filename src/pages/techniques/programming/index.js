import React, { Component} from 'react';

import { Section, Paragraph, Linktree, Linknode
} from '../../../components/'

class ProgrammingIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section name='Programming'>
        <Linktree>
          <Linknode to='/techniques/programming/d3' desc="Using D3 for data visualisation"/>
        </Linktree>
      </Section>
    );
  }
}

export default ProgrammingIndex;
