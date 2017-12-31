import React, { Component} from 'react';

class Subsection extends Component {
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
          <h3 className='content' id={name}>{this.props.name}</h3>
        </div>
        {this.props.children}
      </section>
    );
  }
}

export default Subsection;
