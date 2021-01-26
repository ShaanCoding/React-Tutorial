import React, { Component } from "react";

class DestructuringWelcome extends Component<{
  name: string;
  heroName: string;
}> {
  render() {
    const { name, heroName } = this.props;
    return <div></div>;
  }
}

export default DestructuringWelcome;
