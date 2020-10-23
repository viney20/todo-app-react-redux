import React, { Component } from "react";
import CardShow from "../cardShow";
import Form from "../Form";
import Navbar from "../navbar";

export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Form />
        <hr />
        <CardShow />
      </div>
    );
  }
}
