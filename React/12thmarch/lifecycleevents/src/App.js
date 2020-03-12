import React, { Component } from "react";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import Header from './Components/Header'

// class App extends React.Component {
//   state = {
//     show: true
//   }

//   delHeader = () => {
//     this.setState({show: false});
//   }
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };
//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {

//   componentWillUnmount() {
//     console.log('I am here in child component')
//     // alert("The component named Header is about to be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }



// class App extends Component {
//   state = {
//     favoriteColor: "red",
//     favroriteFruite: "apple",
//     date: new Date()
//   };

  // UNSAFE_componentWillMount(){
  //   console.log('I am here in component will mount')
  // }

  // componentDidMount(){
  //   setInterval(()=> {
  //     this.setState({date: new Date()})
  //   },1000)
  // }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({favoriteColor:'yellow'})
  //   },3000)
  // }

  // static getDerivedStateFromProps (props, state){
  //   return {favoriteColor: props.favcol, favroriteFruite: props.favFruite}
  // }

  // static getDerivedStateFromProps(props, state) {
  //   return { favoriteColor: props.favcol };
  // }

  // changeColor = () => {
  //   this.setState({ favoriteColor: "Yellow" });
  // };

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextProps)
  // }

//   render() {
//     return (
//       <div>
//         {/* My favorite color is {this.state.favoriteColor}
//         <br/>
//         <button onClick={this.changeColor}>Click here to change color</button> */}
//         <FirstComponent newDate={this.state.date.toString()} />
//         <SecondComponent favColor={'red'} />
//       </div>
//     );
//   }
// }

class App extends Component{
  render(){
    return (
      <Header />
    )
  }
}



export default App;
