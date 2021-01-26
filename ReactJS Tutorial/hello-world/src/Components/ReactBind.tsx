import React, { Component } from "react";

class ReactBind extends Component {
  // constructor(props) {
  //     super(props);
  //     this.clickHandler = this.clickHandler.bind(this);
  // }

  state = {
    message: "Hello",
  };

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //     // This breaks the code

  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me!</button> */}
        {/* <button onClick={() => this.clickHandler()>Click</button> */}
        <button onClick={this.clickHandler}>Button</button>
      </div>
    );
  }
}

export default ReactBind;
