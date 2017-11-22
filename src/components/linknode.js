import React, { Component} from 'react';
import Link from 'gatsby-link'

class Linknode extends Component {

  render() {
    return (
      <Link to={this.props.to}>
        <li>{this.props.desc}</li>
      </Link>
    );
  }
}

export default Linknode;
