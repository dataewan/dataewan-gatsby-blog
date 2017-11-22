import React, { Component} from 'react';

class Linktree extends Component {

  render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}

export default Linktree;
