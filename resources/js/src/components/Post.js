import React from "react";

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
        <div className="post__preview">
          <label className="preview" htmlFor="preview">
            <div className="preview__bg-img">
              <img src="../storage/img/preview-bg.png" alt="preview bg image" />
            </div>
            <div className="preview__icon">
              <img src="../storage/img/camera.svg" />
            </div>
            <input
              type="file"
              id="preview"
              accept="image/*"
            />
          </label>
        </div>
        <div className="post__btn-wrapper">
          <input className="btn post-btn" type="button" value="Upload" />
        </div>
      </div>
    );
  }
}

export default Post;
