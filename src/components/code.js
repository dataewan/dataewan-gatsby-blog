import React, { Component} from 'react';
import Constants from './constants'

require('prismjs/themes/prism-solarizedlight.css')

class Code extends Component {

  render() {
    const language = this.props.language;
    return (
      <div className="gatsby-highlight"
        css={{
          width: Constants.leftwidth,
        }}
      >
        <pre className = {`language-${language}`}>
          <code>
            {this.props.children}
          </code>
        </pre>
      </div>
    );
  }
}

export default Code;
