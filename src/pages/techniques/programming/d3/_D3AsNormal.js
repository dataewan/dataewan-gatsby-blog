import React, { Component} from 'react';
import { scaleLinear, scalePoint } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';

import Constants from '../../../../components/constants'

class D3AsNormal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.createChart()
  }

  componentDidUpdate(prevProps, prevState) {
    this.createChart()
  }

  createChart(){
    const margin = {
      left: 100,
      right: 100,
      top: 10,
      bottom: 250
    }
    const width = this.props.size[0] - margin.left - margin.right;
    const height = this.props.size[1] - margin.top - margin.bottom;

    const node = this.node;

    // put a g to contain the datapoints
    const g = select(node)
      .append('g');
    g.attr('transform', `translate(${margin.left} ${margin.top})`);

    const xScale = scalePoint()
      .domain(this.props.data.map(d => d.title))
      .range([0, width])

    const dataMax = max(this.props.data, d=>d.gross)
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, height])

    const xAxis = axisBottom(xScale)

    select(node)
      .append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(${margin.left} ${height + margin.top})`)
      .call(xAxis)

    select(node)
      .select('g.xAxis')
      .selectAll('path')
      .style('display', 'none')


    select(node)
      .select('g.xAxis')
      .selectAll('text')
      .attr('y', 0)
      .attr('x', -9)
      .attr('dy', '.35em')
      .attr('transform', 'rotate(270)')
      .attr('text-anchor', 'end')
    g
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')

    g
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()

    const barWidth=30

    g
      .selectAll('rect')
      .data(this.props.data)
      .attr('x', d => xScale(d.title) - (barWidth / 2))
      .attr('y', d => height - yScale(d.gross))
      .attr('height', d => yScale(d.gross))
      .attr('width', barWidth)
      .style('fill', Constants.blue)
      .style('stroke', Constants.darkblue)
  }

  render() {
    return (
      <svg
        ref={node => this.node = node}
        width={ this.props.size[0] }
        height={this.props.size[1]}/>
    );
  }
}

export default D3AsNormal;
