import React from "react";
import { connect } from 'react-redux'
import _ from 'lodash'

import Post from './Post'
import Form from "./Form";
import { readArchives } from '../actions/archives'
import { readUser } from '../actions/user'

class Update extends React.Component {
  constructor(props) {
    super(props)
    this.readPost = this.readPost.bind(this)
    this.toggleFormState = this.toggleFormState.bind(this)

    const post = this.readPost()
    const defaultFormState = post.postFlag === 1 ? true : false
    this.state = {
      formState: defaultFormState,
      gift: post
    }
  }

  readPost() {
    const { id } = this.props.match.params
    const { archives } = this.props
    const newArchives = _.mapKeys(archives, 'id')
    const post = newArchives[id] ? newArchives[id] : null
    return post
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
      <div className="update">
        <Post formState={this.state.formState} toggleFormState={this.toggleFormState.bind()} />
        <Form gift={this.state.gift} formState={this.state.formState} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  archives: state.archives,
  user: state.user
})
const mapDispatchToProps = { readArchives, readUser }

export default connect(mapStateToProps, mapDispatchToProps)(Update)
