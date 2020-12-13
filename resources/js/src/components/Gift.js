import React, { Component } from "react";

class Gift extends Component {
  constructor(props) {
    super(props);
    this.judgeBookmark = this.judgeBookmark.bind(this);
  }

  judgeBookmark(giftId) {
    const { bookmarks } = this.props;
    let isBookmarked = false;
    bookmarks.forEach(bookmark => {
      if (bookmark.id === giftId) {
        isBookmarked = true;
      }
    });

    if (isBookmarked) {
      return (
        <button
          className="is-bookmarked"
          onClick={e => this.handleBookmark(e)}
        ></button>
      );
    } else {
      return <button onClick={e => this.handleBookmark(e)}></button>;
    }
  }

  handleBookmark(event) {
    const target = event.target;
    if (target.classList.contains("is-bookmarked")) {
      target.classList.remove("is-bookmarked");
    } else {
      target.classList.add("is-bookmarked");
    }
  }

  handlePrice(price) {
    if (price) {
      return `¥${price}`;
    } else {
      return "¥ ー ";
    }
  }

  handlePostFlag(postFlag) {
    if (postFlag === 1) {
      return "I gave";
    } else {
      return "I got";
    }
  }

  render() {
    const { gift } = this.props;
    return (
      <div className="gift">

        <div className="additional-info">
          <div className="date">{gift.createdAt}</div>
          <span className="edit" onClick={ this.appearEditPopup }>・・・</span>
        </div>

        <div className="gift__box">
          <div className="bookmark-wrapper">{this.judgeBookmark(gift.id)}</div>
          <h5 className="name">{gift.name}</h5>
          <div className="box-bottom">
            <div className="img-wrapper">
              <img src={`../storage/images/${gift.imageFileName}`} />
            </div>

            <div className="details">
              <div className="main-info">
                <div className="brand">Brand&nbsp;:&nbsp;{gift.brand}</div>
                <div className="opponent">
                  For&nbsp;{gift.opponentGender},&nbsp;({gift.opponentAge})
                </div>
              </div>

              <div className="sub-info">
                <div className="post-flag">
                  {this.handlePostFlag(gift.postFlag)}
                </div>
                <div className="category">{gift.category}</div>
                <div className="situation">{gift.situation}</div>
                <div className="relationship">{gift.relationship}</div>
                <div className="price">{this.handlePrice(gift.price)}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Gift
