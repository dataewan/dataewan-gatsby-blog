import React from 'React'

import {
  Paragraph
} from '../../../components'

import Constants from '../../../components/constants.js'

import Radial from './_Radial'
import Map from './_Map';
import clustertext from './clustertext.json'

class FormattedOverview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rotate0: this.props.rotate0,
      rotate1: this.props.rotate1,
      scale: this.props.scale,
      spey: this.props.spey,
      zoomlevel: this.props.zoomlevel ? this.props.zoomlevel: 'scotland'
    }
    this.zoomOut = this.zoomOut.bind(this)
    this.zoomSpey = this.zoomSpey.bind(this)
    this.zoomIslay = this.zoomIslay.bind(this)
    this.zoomDeepSpey = this.zoomDeepSpey.bind(this)
  }

  zoomSpey(e){
    this.setState({
      rotate0: 3.93,
      rotate1: 0.5,
      scale: 24800,
      spey: true,
      zoomlevel: 'spey',
    })
  }

  zoomDeepSpey(e){
    this.setState({
      rotate0: 3.3,
      rotate1: 0.29,
      scale: 100000,
      spey: true,
      zoomlevel: 'deepspey',
    })
  }

  zoomIslay(e){
    this.setState({
      rotate0: 6.25,
      rotate1: 1.92,
      scale: 57400,
      spey: false,
      zoomlevel: 'islay'
    })
  }

  zoomOut(e){
    this.setState({
      rotate0: 4.4,
      rotate1: 0,
      scale: 7000,
      spey: false,
      zoomlevel: 'scotland'
    })
  }

  getzoomcontrols(){
    return (
    <div>
      <button 
        css={{
          width: '100%',
          marginBottom: '1px',
          backgroundColor: this.state.zoomlevel === 'scotland' ? Constants.lightblue : Constants.darkblue,
        }}
        onClick={this.zoomOut}>Scotland</button>
      <br/>
      <button 
        css={{
          width: '100%',
          marginBottom: '1px',
          backgroundColor: this.state.zoomlevel === 'islay' ? Constants.lightblue : Constants.darkblue,
        }}
        onClick={this.zoomIslay}>Islay</button>
      <br/>
      <button 
        css={{
          width: '100%',
          marginBottom: '1px',
          backgroundColor: this.state.zoomlevel === 'spey' ? Constants.lightblue : Constants.darkblue,
        }}
        onClick={this.zoomSpey}>Speyside</button>
      <br/>
      <button 
        css={{
          width: '100%',
          marginBottom: '1px',
          backgroundColor: this.state.zoomlevel === 'deepspey' ? Constants.lightblue : Constants.darkblue,
        }}
        onClick={this.zoomDeepSpey}>Closer view Speyside</button>
      <br/>
    </div>
    )
  }

  getoverview(){
    const selectedclusterobject = clustertext[this.props.clusterselected]
    const selectedclustertext = selectedclusterobject.desc
    const clustername = selectedclusterobject.name ? <h4>{selectedclusterobject.name}</h4> : null
    return(
      <div className='containerrow'>
        <div className='content'>
          <Radial
                whisky={this.props.whisky}
                cluster={this.props.cluster}
                radialFill={'tan'}
                radialOverall={this.props.radialOverall}
                width={300}
                height={300}
              />
              <div
                css={{
                  position: 'relative',
                  left: '300',
                  top: '-250',
                  width: '300'
                }}>
                {clustername}
                <p>
                  {selectedclustertext}
                </p>
              </div>
        </div>
      </div>
    )
  }

  getwhiskyselectorcontrol(){
    const options = this.props.whisky.map((d, i) => {
      return (
        <option
          key={`whiskyselectorcontroloptionid${i}`}
          value={d.RowID}
        >
          {d.formatname}
        </option>
      )
    })
    return(
      <select
        value={this.props.selected ? this.props.selected.RowID : '---'}
        onChange={e => {
          const selected = this.props.whisky.filter(d => d.RowID === e.target.value)[0]
          this.props.onHover(selected)
        }}
      >
        {options}
      </select>
    )
  }

  getclustermembership(){
    if (this.props.colourcluster) {
      if (this.props.selected) {
        return <h4>Group: {this.props.selected.cluster}, {clustertext[this.props.selected.cluster].name}</h4>
      } else {
        return <h4>Group: </h4>
      }
    }
  }

  render() {
    const zoomcontrols = this.getzoomcontrols()
    const overview = this.props.clusteroverview ? this.getoverview() : null
    const whiskyselectorcontrol = this.getwhiskyselectorcontrol()
    const clustermembership = this.getclustermembership()

    return (
      <div>
        {overview}
        <div className='containerrow'
          css={{
            paddingBottom: 0
          }}
        >
        <div className='note'>
        <h4>
          {
            this.props.selected ? `Distillery: ${this.props.selected.formatname}` : 'Distillery:'
          }
        </h4>
        <h4>
          {
            this.props.selected ? `Postcode: ${this.props.selected.Postcode}` : 'Postcode:'
          }
        </h4>
        {clustermembership}
        <Radial
          whisky={this.props.whisky}
          selected={this.props.selected}
          radialFill={this.props.radialFill}
          radialOverall={this.props.radialOverall}
          width={300}
          height={300}
        />
        {this.props.controls ? zoomcontrols : null}
        {this.props.controls ? whiskyselectorcontrol : null}
        
        </div>
        <div className='content'>
          <Map
            {...this.props}
            width={594}
            height={770}
            rotate0={this.state.rotate0}
            rotate1={this.state.rotate1}
            scale={this.state.scale}
            spey={this.state.spey}
            cluster={this.props.cluster}
            colourcluster={this.props.colourcluster}
          />
        </div>
      </div>
    </div>
    );
  }
}

export default FormattedOverview
