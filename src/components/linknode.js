import React, { Component} from 'react';
import Link from 'gatsby-link'

import Constants from './constants'

class Linknode extends Component {

  render() {
    return (
      <Link 
        css={{
          display: `block`,
          color: Constants.darkblue,
        }}
        to={this.props.to}>
        {this.props.desc}
      </Link>
    );
  }
}

export default Linknode;
