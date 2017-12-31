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
        <div className='containerrow'>
          <h4 className='content' id={name}>{this.props.name}</h4>
        </div>
        {this.props.children}
      </section>
    );
  }
}

export default Subsubsection;
