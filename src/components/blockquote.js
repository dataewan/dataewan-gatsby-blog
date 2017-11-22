import React, { Component} from 'react';
import Constants from './constants'
import Link from 'gatsby-link'
import { rhythm, scale } from "../utils/typography";

class BlockQuote extends Component {

  render() {
    return (
      <div css={{
        width: Constants.leftwidth,
        paddingBottom: rhythm(1),
      }}>
        <blockquote css={{
          fontStyle: `italic`,
        }}>
          {this.props.children}
        </blockquote>
        <a href={this.props.source}>
          <h6 css={{
            marginBottom: 0
          }}>
            {this.props.person}
          </h6>
        </a>
      </div>
    );
  }
}

export default BlockQuote;
