import React, { Component} from 'react';
import PropTypes from 'prop-types';

import {
  Section, Subsection, Paragraph, Figure, Code
} from '../../../components'

import Constants from '../../../components/constants.js'

import whisky from './whisky.json';
import Radial from './_Radial'
import Map from './_Map';


class WhatWhiskyIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
    this.onHover.bind(this)
  } 
  
  onHover = (d) => {
    this.setState({
      selected: d
    })
  }

  render() {
    const theme ={
      seafill: Constants.vlightblue,
      landfill: Constants.green,
      riverColour: Constants.darkblue,

      selectedColour: Constants.lightred,
      unselectedColour: Constants.darkred,
      disabledpointfill: Constants.darkgrey,

      radialOverall: Constants.darkyellow,
      radialFill: Constants.lightyellow,
    }

    return (
      <article>
        <Radial 
          {...theme}
          width={400}
          height={300}
          whisky={whisky}
        />
        <Map
          {...theme}
          width={500}
          height={800}
          whisky={whisky}
          selected={this.state.selected}
          onHover={this.onHover}
        />

      </article>
    );
  }
}


export default WhatWhiskyIndex;
