import React, { Component} from 'react';
import Constants from './constants'
import { rhythm, scale } from "../utils/typography";

class Figure extends Component {
  getcaption(){
    if(this.props.fullwidth !== true){
      return(
        <figcaption className='note'>
            <h6 className='figurelabel'></h6>
            {this.props.caption} 
        </figcaption>
      )
    } else {
      return (
        <figcaption className='fullwidth'>
            <h6 className='figurelabel'></h6>
            {this.props.caption} 
        </figcaption>
      )
    }
  }

  getdiv(){
    if(this.props.fullwidth !== true){
      return(
        <div className='content'>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div className='fullwidth'>
          {this.props.children}
        </div>
      )
    }
  }

  render() {
    const figcaption = this.getcaption()
    const figdiv = this.getdiv()
    if (this.props.fullwidth){
      return (
        <figure className='containerrow'>
          {figdiv}
          {figcaption}
        </figure>
      )
    } else {
      return (
        <figure className='containerrow'>
          {figcaption}
          {figdiv}
        </figure>
      )
    }
  }
}

export default Figure;
