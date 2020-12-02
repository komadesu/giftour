import React from "react";

import GiveForm from "./GiveForm";
// import GetForm from "./GetForm";

class Post extends React.Component {
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
          />
          <label htmlFor="gave">I gave&nbsp;&nbsp;/</label>
          <input
            className="input"
            id="got"
            type="radio"
            name="status"
            value="got"
          />
          <label htmlFor="got">I got</label>
          <span>a present</span>
        </div>
        <GiveForm />
        {/* <GetForm /> */}
      </div>
    );
  }
}

export default Post;
