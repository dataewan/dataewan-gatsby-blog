import React, { Component} from 'react';
import Link from 'gatsby-link'

import Constants from './constants'
import { rhythm } from '../utils/typography'

class Linknode extends Component {

  render() {
    const prettyname = this.props.to.split('/').slice(-1)[0]
    return (
      <div className='containerrow'>
        <div className='content'
          css={{
              border: `1px solid ${Constants.blue}`
          }}>
          <Link 
            css={{
              display: `block`,
              color: Constants.darkblue,
              backgroundColor: Constants.vlightblue,
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
      </div>
    );
  }
}

export default Linknode;
