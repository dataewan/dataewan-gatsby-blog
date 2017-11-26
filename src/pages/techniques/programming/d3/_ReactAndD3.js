import React, { Component} from 'react';
import { scaleLinear, scalePoint } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { Axis, axisPropsFromBandedScale, BOTTOM, TOP, LEFT, RIGHT} from 'react-d3-axis'

import styles from './_ReactAndD3.css'

import Constants from '../../../../components/constants'

class D3AsNormal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const margin = {
      left: 300,
      right: 10,
      top: 10,
      bottom: 50
    }
    const width = this.props.size[0] - margin.left - margin.right;
    const height = this.props.size[1] - margin.top - margin.bottom;

    const barSize=15

    const yScale = scalePoint()
      .domain(this.props.data.map(d => d.title))
      .range([0, height])

    const dataMax = max(this.props.data, d=>d.gross)
    const xScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, width])

    const rects = this.props.data.map((d, i) => <rect
      key = {i}
      x = {0}
      y = {yScale(d.title)}
      height = {barSize}
      width = {xScale(d.gross)}
      fill = {Constants.green}
      stroke = {Constants.darkgreen}
    />)

    return (
      <svg
        ref={node => this.node = node}
        width={ this.props.size[0] }
        height={this.props.size[1]}>
        <g
          transform={`translate(${margin.left} ${margin.top})`}
        >
          {rects}
          <g
            transform={`translate(0 ${barSize / 2})`}
          >
            <Axis 
              style={{orient: LEFT}} 
              {...axisPropsFromBandedScale(yScale)} 
            />
          </g>
        </g>
      </svg>
    );
  }
}

export default D3AsNormal;
