import React, { Component} from 'react';
import PropTypes from 'prop-types';

import {
  Section, Subsection, Paragraph, Figure, Code
} from '../../../components'

import Constants from '../../../components/constants.js'

import whisky from './whisky.json';
import Radial from './_Radial'
import Map from './_Map';
import FormattedOverview from './_FormattedOverview';


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
      landfill: Constants.darkgreen,
      riverColour: Constants.darkblue,

      selectedColour: Constants.lightred,
      unselectedColour: Constants.darkred,
      disabledpointfill: Constants.darkgrey,

      radialOverall: Constants.darkyellow,
      radialFill: Constants.lightyellow,
    }

    return (
      <article>
        <Paragraph>
          I have nearly finished my bottle of whisky.
          I would like to make an informed decision when purchasing my next one.
          I found a <a href='https://www.mathstat.strath.ac.uk/outreach/nessie/nessie_whisky.html'>dataset from Glasgow University</a>.
          I've been digging around in this dataset, and have found some very useful.
        </Paragraph>
        <Section name="Contents of the dataset">
          <Paragraph>
            There are 86 individual distilleries contained in this dataset.
          </Paragraph>
          <div>
            <div
              css={{
              float: 'right',
              width: Constants.rightwidth
              }}
            >
              <h4>
                {
                  this.state.selected ? `Distillery: ${this.state.selected.formatname}` : null
                }
              </h4>
              <h4>
                {
                  this.state.selected ? `Postcode: ${this.state.selected.Postcode}` : null
                }
              </h4>
            </div>
            <div
              css={{
              width: Constants.leftwidth
              }}
            >
              <Map
                {...theme}
                width={594}
                height={770}
                whisky={whisky}
                selected={this.state.selected}
                onHover={this.onHover}
              />
            </div>
          </div>
          <Paragraph>
            Each of these distilleries is given a score between 0 and 4 over 12 different taste categories.
          </Paragraph>
          <Figure caption="The average of all the scores. The average scotch has a high score in body, fruity, malty, and sweetness.">
            <Radial
              {...theme}
              width={594}
              height={300}
              whisky={whisky}
            />
          </Figure>
          <Paragraph>
            This means that there are 12 ⨉ 86 = 1,032 observations in this dataset.
            This is too much information to make sense of.
            Fortunately there are a few things we can do to narrow down what we need to think about.
          </Paragraph>
        </Section>
        <Section name='Geography of Scotland'>
          <Paragraph>
            The geography of Scotland has quite an impact on the flavour of the whisky.
          </Paragraph>
          <Figure caption='From https://www.wineware.co.uk, the whisky regions of Scotland'>
            <img src="https://www.wineware.co.uk/Content/Images/uploaded/Satelite%20Pages/scotch-whisky-map-1.jpg" />
          </Figure>
          <Paragraph>
            In particular there are two regions with a high concentration of distilleries.
            Islay and Speyside.
          </Paragraph>
          <Subsection name='Islay'>
            <FormattedOverview
              {...theme}
              whisky={whisky}
              selected={this.state.selected}
              onHover={this.onHover}
              rotate0={6.25}
              rotate1={1.92}
              scale={57400}
              spey={true}
            />
          </Subsection>
          <Subsection name='Speyside'>
            <FormattedOverview
              {...theme}
              whisky={whisky}
              selected={this.state.selected}
              onHover={this.onHover}
              rotate0={3.93}
              rotate1={0.5}
              scale={24800}
              spey={true}
            />
          </Subsection>
        </Section>
        <Section name='Putting the whisky into groups'>
        </Section>
      </article>
    );
  }
}


export default WhatWhiskyIndex;
