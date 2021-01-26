import React from "react";

let ChildComponent: React.FC<{ greetHandler: () => void }> = (props) => {
  return <button onClick={props.greetHandler}>Greet Parent</button>;
};

export default ChildComponent;
