import React, { Component} from 'react';

class Subsubsection extends Component {
  getName(){
    return(
      this.props.name.replace(/[^\w]/g, '')
    ).toLowerCase()
  }

  render() {
    const name = this.getName()
    return (
      <section>
        <h3 id={name}>{this.props.name}</h3>
        {this.props.children}
      </section>
    );
  }
}

export default Subsubsection;
