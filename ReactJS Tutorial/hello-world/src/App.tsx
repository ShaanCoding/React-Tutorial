import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";

import GreetProps from "./Components/GreetProps";

import Welcome from "./Components/GreetClassComponent";

import Message from "./Components/Message";
import Counter from "./Components/Counter";
import GreetDestructured from "./Components/DestructuringGreet";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";

import ReactBind from "./Components/ReactBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";

function App() {
  return (
    <div className="App">
      {/* <Greet /> Tutorial 1 */}
      {/* <Welcome /> Tutorial 2 */}

      {/* <GreetProps name="John Doe" /> Tutorial 9 */}

      {/* <Message /> Tutorial 10 */}
      {/* <Counter/> */}

      {/* <GreetDestructured name="Shaan" heroName="batman" /> Tutorial 12 */}

      {/* <FunctionClick />
      <ClassClick/> */}
      {/* Tutorial 13 */}

      {/* <ReactBind /> */}

      {/* <ParentComponent /> 15 */}

      {/* <UserGreeting /> 16 */}
      <NameList />
    </div>
  );
}

export default App;
