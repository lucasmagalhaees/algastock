import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import TestComponent from "../TestComponent";
import ClassComponent from "../ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent name="Lucas"></TestComponent>
        <ClassComponent name="Mundo"></ClassComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
