import React, { Component } from "react";
import Child from "../Child/Child";
import "./Parent.css";

export default class Parent extends Component {
  clickHandler(e) {
    console.log("currentTarget: ", e.currentTarget);
  }
  render() {
    var children = [];
    var i;
    for (i = 1; i <= 3; i++) {
      children.push(<Child key={i} index={i} />);
    }

    return (
      <div className="parent" onClick={this.clickHandler}>
        {children}
      </div>
    );
  }
}
