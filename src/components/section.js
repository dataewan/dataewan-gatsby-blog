import React, { Component} from 'react';

class Section extends Component {

  render() {
    return (
      <section>
        <h1>{this.props.name}</h1>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
