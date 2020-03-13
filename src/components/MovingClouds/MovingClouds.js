import React, { Component } from "react";
import "./MovingClouds.css";
class MovingClouds extends Component {
  state = {};
  render() {
    return (
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
    );
  }
}

export default MovingClouds;
