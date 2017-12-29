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
import ClusterSelector from './_ClusterSelector';

const ALLSTRING = 'All'

class WhatWhiskyIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: null,
      selectedcluster: ALLSTRING
    }
    this.onHover.bind(this)
    this.clusterupdate.bind(this)
  } 
  
  onHover = (d) => {
    this.setState({
      selected: d
    })
  }

  clusterupdate = (d) => {
    this.setState({
      selectedcluster: d,
      selected: null
    })
  }

  render() {
    const theme ={
      seafill: Constants.vlightblue,
      landfill: Constants.darkgreen,
      riverColour: Constants.darkblue,

      selectedColour: Constants.lightred,
      unselectedColour: Constants.darkred,
      disabledColour: Constants.lightgrey,

      radialOverall: Constants.darkyellow,
      radialFill: Constants.lightyellow,
    }

    return (
      <article>
        <Paragraph>
          I have nearly finished my bottle of whisky.
          I would like to make an informed decision when purchasing my next one.
          I know a little bit about whisky but not enough to make a confident decision.
          I found a <a href='https://www.mathstat.strath.ac.uk/outreach/nessie/nessie_whisky.html'>dataset from Glasgow University</a>.
        </Paragraph>
        <Paragraph>
          After digging around in this data, I've found a few new ways to think about my whisky purchase.
          I also found <a href="https://www.youtube.com/watch?v=t5YeM55l2_0&index=1&list=PL1ABF6820EA98D487">Brian Cox</a> clearly enjoying himself while helping with the pronunciation.
        </Paragraph>
        <Section name="Contents of the dataset">
          <Paragraph note="On all these maps, hover over the points to find out more.">
            There are 86 individual distilleries contained in this dataset.
            Here they all are on a map.
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
            We'd need to hold them all in our head at once to make an informed decision,
            which is beyond me.
            There are a few rules of thumb that we can use to narrow down our decision making criteria.
          </Paragraph>
        </Section>
        <Section name='Geography of Scotland'>
          <Paragraph>
            One of the easiest things to get your head around is the geography of Scotland.
            The geography of Scotland is thought to have quite an impact on the characteristics of the whisky.
          </Paragraph>
          <Figure caption={<div>From <a href="https://www.wineware.co.uk/Content/Images/uploaded/Satelite%20Pages/scotch-whisky-map-1.jpg">wineware.co.uk</a>, the whisky regions of Scotland</div>}>
            <img src="https://www.wineware.co.uk/Content/Images/uploaded/Satelite%20Pages/scotch-whisky-map-1.jpg" />
          </Figure>
          <Paragraph>
            In particular there are two regions with a very high concentration of distilleries.
            Islay and Speyside.
          </Paragraph>
          <Subsection name='Islay'>
            <Paragraph>
              Islay is an island on the west coast, in the island group called the Inner Hebrides.
              When you think about Islay whisky,
              you think about big, smoky, peaty whisky.
              You can see that this is the case, particularly in the three distilleries in the south coast.
            </Paragraph>
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
            <Paragraph note={<a href="https://www.thewhiskyexchange.com/c/314/speyside-single-malt-scotch-whisky">60% figure comes from Whisky Exchange</a>}>
              The second area that has a high concentration of distilleries is Speyside.
              I've highlighted on this map the River Spey, which gives this area its name.
              More than 60% of Scotland's whisky comes from Speyside.
              I can't find out why so much whisky comes from Speyside.
              Some people claim that the area has water and climate that is particularly suitable for whisky production,
              but I can't verify that.
            </Paragraph>
            <Paragraph>
              When you think about Speyside whisky you think about lighter, relaxed whisky.
              This does seem to be the case,
              but you also notice that there is a lot of variation between whiskies that are even right next to each other.
              There's something else going on here.
            </Paragraph>
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
            <Paragraph>
            </Paragraph>
            <FormattedOverview
              {...theme}
              whisky={whisky}
              selected={this.state.selected}
              onHover={this.onHover}
              rotate0={3.3}
              rotate1={0.29}
              scale={100000}
              spey={true}
            />
          </Subsection>
        </Section>
        <Section name='Putting the whisky into groups'>
          <Paragraph note={<a href="https://github.com/dataewan/whisky-vis/blob/master/analysis/whiskyanalysis.ipynb">analysis</a>}>
            The other trick we can use is to group the whiskies into groups with similar characteristics.
            I've found there are 9 groups in the data that can help break down the problem.
            Select the groups below to find out more about them.
          </Paragraph>
          <ClusterSelector 
            whisky={whisky}
            selectedcluster={this.state.selectedcluster}
            onUpdate={this.clusterupdate}
            allstring={ALLSTRING}
          />
          <FormattedOverview
            {...theme}
            whisky={whisky}
            selected={this.state.selected}
            clusterselected={this.state.selectedcluster}
            clusteroverview={true}
            onHover={this.onHover}
            cluster={this.state.selectedcluster === ALLSTRING ? null : this.state.selectedcluster}
            controls={true}
            colourcluster={true}
          />
        </Section>
        <Section name="What am I going to buy?">
          <Paragraph>
            Everyone has different tastes when it comes to whisky,
            and even your own tastes might change depending on the occasion.
            There isn't going to be a single correct answer.
          </Paragraph>
          <Paragraph>
          </Paragraph>
          <Paragraph>
          </Paragraph>
        </Section>
      </article>
    );
  }
}


export default WhatWhiskyIndex;
