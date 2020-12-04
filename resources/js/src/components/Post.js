import React from "react";

import Form from "./Form";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: true
    };
    this.displayGetForm = this.displayGetForm.bind(this);
    this.displayGiveForm = this.displayGiveForm.bind(this);
  }

  displayGetForm() {
    this.setState({
      formState: false
    });
  }

  displayGiveForm() {
    this.setState({
      formState: true
    });
  }

  render() {
    return (
      <div className="post">
        <div className="post__status">
          <input
            className="input"
            id="gave"
            type="radio"
            name="status"
            value="gave"
            defaultChecked
          />
          <label htmlFor="gave" onClick={this.displayGiveForm}>
            I gave&nbsp;&nbsp;/
          </label>
          <input
            className="input"
            id="got"
            type="radio"
            name="status"
            value="got"
          />
          <label htmlFor="got" onClick={this.displayGetForm}>
            I got
          </label>
          <span>a present</span>
        </div>
        <Form formState={this.state.formState} />
      </div>
    );
  }
}

export default Post;
