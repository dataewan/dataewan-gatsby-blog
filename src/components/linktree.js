import React, { Component} from 'react';

import { rhythm } from '../utils/typography'

class Linktree extends Component {

  render() {
    return (
      <nav
        css={{
          paddingBottom: rhythm(2)
        }}>
        {this.props.children}
      </nav>
    );
  }
}

export default Linktree;
