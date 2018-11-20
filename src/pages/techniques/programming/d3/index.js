import React, { Component} from 'react';
import PropTypes from 'prop-types';

import {
  Section, Subsection, Paragraph, Figure, Code, Layout
} from '../../../../components'

import data from './data.json'

import ReactAndD3 from './_ReactAndD3'
import D3AsNormal from './_D3AsNormal';


class D3Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <Layout>
      <article>
        <Section name='Making use of d3'>
          <Paragraph note={<a href='https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71'>Elijah Meeks' post</a>}>
            <a href="https://d3js.org/">d3</a> is very cool.
            Getting it to work properly with react is difficult,
            the two libraries squabble with each other trying to control the DOM.
            Elijah Meeks has a blog post that describes a few for getting the two to work together better.
            I'm going to work through these examples here.
          </Paragraph>
          <Subsection name="Use React and D3 together">
            <Paragraph>
              This option is the one that people tend to recommend.
              You use D3 to inform all the drawing instructions.
              So for example making scales that convert from the data space to the pixel space,
              or converting data into a SVG path.
              You then give these drawing instructions to react.
              React handles the creating and updating of the DOM elements.
            </Paragraph>
            <Figure caption="Using only react to draw the SVG that makes the chart">
              <ReactAndD3 size={[500, 240]} data={this.state.data} />
            </Figure>
            <Paragraph>
              The advantages of this method are that you get to take advantage of the react managment of the virtual DOM,
              so performance should be better.
              Also it means that you have less D3 in your code,
              so it is easier to share with people with a react background.
            </Paragraph>
            <Paragraph note={
              <div>
              <a href="https://github.com/shauns/react-d3-axis">
                Implementing axis in pure react
                </a>
                <br />
                <a href="https://github.com/reactjs/react-transition-group">
                  Transitions in react
                </a>
              </div>
              }>
              The disadvantages are that there are some SVG elements that D3 is really good at drawing, like axes.
              Drawing these without using D3 would be really tedious.
              Additionally, 
              there are things like transitions that D3 does really well,
              which aren't as easy to do in react.
              There are ways to achieve the same effects by using pure react,
              but I'm less experienced with these.
            </Paragraph>
          </Subsection>
          <Subsection name="Use D3 as normal, and tell react to go away">
            <Paragraph>
              This method feels more natural if you've used a lot of D3 in the past.
              It probably is a good idea to transition more to using pure react for most things.
              I'm going to keep this method in my pocket though.
              If there is something that is really well implemented in D3, this will be a good option.
              You can use all the same D3 code as you used previously.
            </Paragraph>
            <Figure caption="Using D3, and stopping react from updating the DOM">
              <D3AsNormal size={[500, 500]} data={this.state.data}/>
            </Figure>
            <Paragraph>
              There are two tricks to this method.
              The first is that in the render method of your component,
              you find the reference to the DOM element you're creating.
            </Paragraph>
            <Code language="javascript" code={`
render() {
  return (
    <svg
      ref={node => this.node = node}
      width={ this.props.size[0] }
      height={this.props.size[1]}/>
  );
}
            `} />
            <Paragraph>
              <span className="mono">this.node</span> is then a property of the component object.
              In this example it will refer to the SVG DOM element. 
              The next trick is to intercept the <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">
                react lifecycle methods,
              </a> and use them to trigger D3 functions to update the plot.
            </Paragraph>
            <Code language='javascript' code={`
componentDidMount() {
  this.createChart()
}

componentDidUpdate(prevProps, prevState) {
  this.createChart()
}

createChart(){
  /* 
   * make your scale functions and so on here 
   */

  // now do the d3 as normal. Start off by selecting this.node, which is our
  // <svg> node
  d3.select(this.node)
    // assume for this example that data has been passed through as a prop
    .data(this.props.data)
    .enter()
    .append('circle')
    // ....
            `} />
          </Subsection>
          <Paragraph>
            The <span className='mono'>createChart()</span> function will contain all the regular D3 code.
            If you're using transitions, then I think you might want an <span className="mono">updateChart()</span> function as well.
          </Paragraph>
        </Section>
      </article>
    </Layout>
    );
  }
}

export default D3Index;
