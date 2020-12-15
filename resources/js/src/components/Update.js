import React from "react";
import { connect } from 'react-redux'
import _ from 'lodash'

import Post from './Post'
import Form from "./Form";
import { readPosts } from '../actions/posts'
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
    const { posts } = this.props
    const newPosts = _.mapKeys(posts, 'id')
    const post = newPosts[id] ? newPosts[id] : null
    console.log(post)
    return post
  }

  toggleFormState() {
    const currentState = this.state.formState
    const nextState = !currentState

    this.setState({
      formState: nextFormState
    })
  }

  render() {
    return (
      <div className="update">
        hello
        <Post formState={this.state.formState} toggleFormState={this.toggleFormState.bind()} />
        <Form gift={this.state.gift} formState={this.state.formState} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
})
const mapDispatchToProps = { readPosts, readUser }

export default connect(mapStateToProps, mapDispatchToProps)(Update)
