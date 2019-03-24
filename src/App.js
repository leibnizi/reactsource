import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    test: 1
  };
  componentDidMount() {
    this.init();
    this.setState({ test: 10 });
  }

  init = () => {
    // console.log(
    //   "this.__proto__.__proto__ === Component.prototype: ",
    //   this.__proto__.__proto__ === Component.prototype
    // );
    // console.log("this.constructor === App", this.constructor === App);
    console.log("this: ", this);
    console.log('stateNode', this.stateNode)
  };
  render() {
    const { test } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.setState({ test: this.state.test + 1 })}>
            <img src={logo} className="App-logo" alt="logo" />
          </button>

          <Child test={test} />
        </header>
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <>
        <p>{this.props.test}</p>
      </>
    );
  }
}

export default App;

console.log("App: ", App);
var com = new Component();
console.log('com', com)
console.log("Component: ", Component);
console.log("Component.props: ", com === App);
console.log("Component.prototype", Component.prototype);
console.log("Component.__proto__", Component.__proto__);
console.log(
  "Component.constructor",
  Component.constructor === Function.constructor
);
