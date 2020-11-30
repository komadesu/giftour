import React from "react";

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post__status">
          <label>
            <input className="input" type="radio" name="status" value="gave" />
            I gave /
            <input className="input" type="radio" name="status" value="got" />
            I got
          </label>
          <span>a present</span>
        </div>
        <div className="post__preview">
          <label htmlFor="preview">
            <div className="preview__bg-img">
              <img src="../storage/img/preview-bg.png" alt="preview bg image" />
            </div>
            <div className="preview__icon">
              <img src="../storage/img/camera.svg" />
            </div>
            <input
              className="img-upload"
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
