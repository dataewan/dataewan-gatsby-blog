import React, { Component} from 'react';

class Section extends Component {
  getName(){
    return(
      this.props.name.replace(/[^\w]/g, '')
    ).toLowerCase()
  }

  render() {
    const name = this.getName()
    return (
      <section>
        <h2 id={name}>{this.props.name}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
