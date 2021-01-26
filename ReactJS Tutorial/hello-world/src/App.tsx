import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";

import GreetProps from "./Components/GreetProps";

import Welcome from "./Components/GreetClassComponent";

import Message from "./Components/Message";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Greet /> Tutorial 1 */}
      {/* <Welcome /> Tutorial 2 */}

      {/* <GreetProps name="John Doe" /> Tutorial 9 */}

      {/* <Message /> Tutorial 10 */}
      <Counter/>
    </div>
  );
}

export default App;
