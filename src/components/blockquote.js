import React, { Component} from 'react';
import Constants from './constants'
import { Link } from 'gatsby'
import { rhythm, scale } from "../utils/typography";

class BlockQuote extends Component {

  render() {
    return (
      <div className='containerrow'>
        <div className='content'>
          <blockquote>
            {this.props.children}
          </blockquote>
        </div>
        <div className='note'>
          <a href={this.props.source}>
            <h6>
              {this.props.person}
            </h6>
          </a>
        </div>
      </div>
    );
  }
}

export default BlockQuote;
