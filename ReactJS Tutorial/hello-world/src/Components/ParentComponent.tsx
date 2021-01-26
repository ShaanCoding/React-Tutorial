import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component<{}> {
  constructor(props: any) {
    super(props);
    this.greetParent = this.greetParent.bind(this);
  }

  state = {
    parentName: "Parent",
  };

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    );
  }
}

export default ParentComponent;
