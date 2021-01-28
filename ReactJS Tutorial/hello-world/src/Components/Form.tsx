import React, { Component } from "react";

class Form extends React.Component<
  {},
  { username: string; comments: string; topic: string }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUserNameChange = (e: any) => {
    this.setState({ username: e.target.value });
  };

  handleCommentsChange = (e: any) => {
    this.setState({ comments: e.target.value });
  };

  handleTopicChange = (e: any) => {
    this.setState({ topic: e.target.value });
  };

  handleSubmit = (e: any) => {
    alert(
      `Username: ${this.state.username} Comments: ${this.state.comments} Topic: ${this.state.topic}`
    );
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
