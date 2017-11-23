import React, { Component} from 'react';

import Constants from './constants'

class Linktree extends Component {

  render() {
    return (
      <nav>
        {this.props.children}
      </nav>
    );
  }
}

export default Linktree;
