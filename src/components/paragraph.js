import React, { Component} from 'react';
import { rhythm, scale } from "../utils/typography";
import Constants from './constants';


class Paragraph extends Component {

  render() {
    const note = this.props.note;
    return (
      <div>
        {note !== undefined &&
            <aside css={{
              float: `right`,
              width: Constants.rightwidth,
              ...scale(Constants.smallscale),
            }}>
              {note}
            </aside>
        }
        <p css={{
          width: Constants.leftwidth
        }}>
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default Paragraph;
