import React, { Component} from 'react';

class Subsection extends Component {

  render() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Subsection;
