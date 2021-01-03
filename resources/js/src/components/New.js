import React from "react";

import Post from "./Post";
import Form from "./Form";

class New extends React.Component {
  constructor(props) {
    super(props)
    this.toggleFormState = this.toggleFormState.bind(this)

    const defaultFormState = true
    this.state = {
      formState: defaultFormState,
    }
  }
  toggleFormState() {
    const currentState = this.state.formState
    const nextFormState = !currentState

    this.setState({
      formState: nextFormState
    })
  }

  render() {
    return (
      <div className="new">
        <Post formState={this.state.formState} toggleFormState={this.toggleFormState.bind(this)} />
        <Form formState={this.state.formState} />
      </div>
    );
  }
}

export default New;
