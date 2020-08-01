import React, { Component } from "react";
import "./Child.css";

export default class Child extends Component {
  render() {
    return <div className="child">Child {this.props.index}</div>;
  }
}
