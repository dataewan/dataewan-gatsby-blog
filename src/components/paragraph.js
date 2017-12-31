import React, { Component} from 'react';
import { rhythm, scale } from "../utils/typography";
import Constants from './constants';


class Paragraph extends Component {

  render() {
    const note = this.props.note;
    return (
      <div className='containerrow'>
        {note !== undefined &&
            <aside className='note'>
              {note}
            </aside>
        }
        <p
          className='content'
        >
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default Paragraph;
