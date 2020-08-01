import React, { Component } from "react";
import "./MainApp.css";
import Parent from "../Components/Parent/Parent";

export default class MainApp extends Component {
  render() {
    return (
      <div className="MainApp">
        <div className="Title">Current Target VS Target</div>
        <Parent />
      </div>
    );
  }
}
