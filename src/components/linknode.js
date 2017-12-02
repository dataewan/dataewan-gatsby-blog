import React, { Component} from 'react';
import Link from 'gatsby-link'

import Constants from './constants'
import { rhythm } from '../utils/typography'

class Linknode extends Component {

  render() {
    const prettyname = this.props.to.split('/').slice(-1)[0]
    return (
      <div css={{
        border: `${Constants.vlightgrey} 1px solid`,
        marginBottom: rhythm(0.5),
        width: Constants.leftwidth

      }}>
        <Link 
          css={{
            display: `block`,
            color: Constants.darkblue,
            backgroundColor: Constants.vlightblue
          }}
          to={this.props.to}>
          {prettyname}
        </Link>
        <div css={{
          paddingLeft: rhythm(1)
        }}>
          {this.props.desc}
        </div>
      </div>
    );
  }
}

export default Linknode;
