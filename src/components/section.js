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
        <div className='containerrow'>
          <h2 className='content' id={name}>{this.props.name}</h2>
        </div>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
