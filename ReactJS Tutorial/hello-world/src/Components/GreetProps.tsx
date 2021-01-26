import React from "react";

let WelcomeProp: React.FC<{ name: string }> = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
};

export default WelcomeProp;
