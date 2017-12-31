
import React, { Component} from 'react';
import Constants from './constants'

class RawHTML extends Component {
  constructor(props) {
    super(props);
  }
  render(){

    return(
      <div className='containerrow'>
        <div className='content'
          dangerouslySetInnerHTML={ {__html: this.props.children} } />
      </div>
    )
  }

}


export default RawHTML;
