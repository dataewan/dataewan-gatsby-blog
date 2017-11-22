import React, { Component} from 'react';
import Constants from './constants'
import { rhythm, scale } from "../utils/typography";

class Figure extends Component {

  getcaption(){
    if(this.props.fullwidth !== true){
      return(
        <figcaption 
          css={{ 
            width: Constants.rightwidth, 
            float: `right`, 
            ...scale(Constants.smallscale), }}> 
            {this.props.caption} 
        </figcaption>
      )
    } else {
      return (
        <figcaption 
          css={{ 
            width: Constants.leftwidth, 
            ...scale(Constants.smallscale), }}> 
            {this.props.caption} 
        </figcaption>
      )
    }
  }

  getdiv(){
    if(this.props.fullwidth !== true){
      return(
        <div 
          css={{ 
            width: Constants.leftwidth, 
          }}>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div 
          css={{ 
            width: `100%`, 
          }}>
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
        <figure>
          {figdiv}
          {figcaption}
        </figure>
      )
    } else {
      return (
        <figure>
          {figcaption}
          {figdiv}
        </figure>
      )
    }
  }
}

export default Figure;
