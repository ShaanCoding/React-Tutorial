import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";

import GreetProps from "./Components/GreetProps";

import Welcome from "./Components/GreetClassComponent";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />

      <GreetProps name="John Doe" />
    </div>
  );
}

export default App;
