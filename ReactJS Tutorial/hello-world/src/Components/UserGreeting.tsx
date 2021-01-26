import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    isLoggedIn: false,
  };

  render() {
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Shaan</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // let message;
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Shaan</div>
    // }
    // else {
    //     message = <div>Welcome Guest</div>
    // }
    // return (<div>{message}</div>);
    return this.state.isLoggedIn ? (
      <div>Welcome Shaan</div>
    ) : (
      <div>Welcome Guest</div>
    );

    // return this.state.isLoggedIn && <div>Welcome Shaan</div>;
  }
}

export default UserGreeting;
