import React, { Component } from "react";
import Constants from "./constants";
import { rhythm, scale } from "../utils/typography";
import Latex from "react-latex";

class Equation extends Component {
  render() {
    return (
      <figure className="containerrow">
        <Latex>{this.props.equation}</Latex>
        <h6 className="equationlabel" />
      </figure>
    );
  }
}

export default Equation;
