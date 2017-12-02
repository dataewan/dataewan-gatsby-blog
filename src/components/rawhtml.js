
import React, { Component} from 'react';
import Constants from './constants'

class RawHTML extends Component {
  constructor(props) {
    super(props);
  }
  render(){

    return(
      <div css={{
        width: Constants.leftwidth,
        overflow: `scroll`
      }}
      dangerouslySetInnerHTML={ {__html: this.props.children} } />
    )
  }

}


export default RawHTML;
