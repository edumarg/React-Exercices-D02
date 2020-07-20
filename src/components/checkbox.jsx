import React, { Component } from "react";
import ImAlive from "./im_alive";

class WithCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleCheckBoxState = () => {
    this.setState((state) => {
      return {
        checked: !state.checked,
      };
    });
  };

  render() {
    return (
      <div>
        <label for="alive">Show I'm Alive</label>
        <input
          type="checkbox"
          id="alive"
          name="alive"
          checked={this.state.checked}
          onChange={() => this.handleCheckBoxState()}
        ></input>
        {this.state.checked && <ImAlive></ImAlive>}
      </div>
    );
  }
}

export default WithCheckBox;
