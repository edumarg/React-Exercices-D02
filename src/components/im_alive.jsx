import React, { Component } from "react";

class ImAlive extends Component {
  state = {};

  componentDidMount() {
    alert("I'm Alive!!!!");
  }
  render() {
    return <div>I'm Alive</div>;
  }
}

export default ImAlive;
