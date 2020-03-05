import React, { Component } from "react";

class ControlledComponent extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = () => {
      const {text} = this.state
      if(!text){
        return  alert("FIELD CANNOT BE EMPTY")
      }else{
          alert("ALL CLEAR")
      }
  }

  render() {
    console.log(this.state.text);
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.text}
            placeholder="controlled component"
          />
          <button onClick={this.handleSubmit}>Submit</button>
          <br />
          {this.state.text}
        </form>
      </div>
    );
  }
}

export default ControlledComponent;
