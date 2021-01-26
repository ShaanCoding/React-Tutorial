import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  addIncrement() {
    //   We need to use the setState method
    //   What happens if we try to change it directly however

    // this.state.count = this.state.count + 1;

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(`Callback value`, this.state.count);
      }
    );

    // this.setState((prevState) => ({
    //   count: prevState.count + 1,
    // }));

    console.log(this.state.count);
  }

  incrementFive() {
    this.addIncrement();
    this.addIncrement();
    this.addIncrement();
    this.addIncrement();
    this.addIncrement();
  }

  render() {
    return (
      <div>
        {/* First we need a count state */}
        <div>Count - {this.state.count}</div>
        <button
          onClick={() => {
            this.addIncrement();
            // this.incrementFive();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
