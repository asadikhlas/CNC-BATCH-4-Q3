import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    works: false
  };

  handleChange = () => {
    this.setState({works: !this.state.works, counter: this.state.counter + 1})
  }


  // handleIncrement = () => {
  //   this.setState({counter: this.state.counter + 1 })
  // }

  // handleIncrement = () => {
  //   this.setState((prevState) => ({counter: prevState.counter + 1 }))
  // }

  render() {
    const {works} = this.state
    return (
      <div>
        {/* <button onClick={this.handleIncrement} >Increment</button><br />
        <p>NUMBER IS {this.state.counter} </p> */}

        <button onClick={this.handleChange}>{works ? "Change name into age" : "Change age into name"}</button>
        <br />
        {works ? <p>Hi there my name is foo</p> : <p>My age is 22</p> }
        {this.state.counter}
      </div>
    );
  }
}

export default App;
