import React from 'React'

import Constants from '../../../components/constants.js'

import Radial from './_Radial'
import Map from './_Map';

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
    </div>
    )
  }

  render() {
    const zoomcontrols = this.getzoomcontrols()

    return (
      <div>
        <div
          css={{
            float: 'right',
            width: Constants.rightwidth
          }}
        >
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
        <Radial
          {...this.props}
          width={300}
          height={300}
        />
        {this.props.zoom ? zoomcontrols : null}
        </div>
        <div
          css={{
            width: Constants.leftwidth
          }}
        >
          <Map
            {...this.props}
            width={594}
            height={770}
            rotate0={this.state.rotate0}
            rotate1={this.state.rotate1}
            scale={this.state.scale}
            spey={this.state.spey}
            cluster={this.props.cluster}
          />
        </div>
      </div>
    );
  }
}

export default FormattedOverview
