import React, { Component} from 'react';
import Constants from './constants'
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';

class Code extends Component {

  render() {
    const language = this.props.language;
    return (
      <div className='containerrow'>
        <pre className='content' >
          <SyntaxHighlighter 
            language={language}
            style={coy}>
            {this.props.code}
          </SyntaxHighlighter>
        </pre>
      </div>
    );
  }
}

export default Code;
