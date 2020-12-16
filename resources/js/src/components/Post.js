import React from 'react'

const Post = ({ formState, toggleFormState }) => {
  return (
    <div className="post__status">
      <input
        className="input"
        id="gave"
        type="radio"
        name="status"
        value="gave"
        checked={formState}
        onChange={toggleFormState}
      />
      <label htmlFor="gave">
        I gave&nbsp;&nbsp;/
      </label>
      <input
        className="input"
        id="got"
        type="radio"
        name="status"
        value="got"
        checked={!formState}
        onChange={toggleFormState}
      />
      <label htmlFor="got">
        I got
      </label>
      <span>a present</span>
    </div>
  )
}

export default Post
