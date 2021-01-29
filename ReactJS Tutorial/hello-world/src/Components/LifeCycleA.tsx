import React, { Component } from "react";

class LifeCycleA extends Component<{}, { name: string }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      name: "Shaan",
    };
    console.log("Lifecycle A constructor");
  }

  static getDerivedStateFromProps(props: {}, state: { name: string }) {
    console.log("LifeCycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA didMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: {}, prevState: { name: string }) {
    console.log("LifeCycleA getSnapShotBeforeUpdate");
  }

  render() {
    console.log("LifeCycle A render");
    return <div>Lifecycle A</div>;
  }
}

export default LifeCycleA;
