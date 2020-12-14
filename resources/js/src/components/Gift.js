import React, { Component } from "react";

class Gift extends Component {
  constructor(props) {
    super(props);
    this.judgeOwner = this.judgeOwner.bind(this);
    this.judgeBookmark = this.judgeBookmark.bind(this);
  }

  isIncludedOrNot(targets, targetId) {
    let isIncluded
    targets.forEach(target => {
      if (target.id === targetId) {
        isIncluded = true
      }
    })
    return isIncluded
  }
  judgeOwner(giftId) {
    const { posts } = this.props;
    const isOwned = this.isIncludedOrNot(posts, giftId)

    if (isOwned) {
      return (
        <>
          <span className="edit__popup-btn" onClick={this.appearEditPopup}>・・・</span>
          <div className="edit__popup">
            <div className="edit__btn update" onClick={this.toUpdate}>
              <span>編集</span>
              <img src="../storage/images/edit.png" />
            </div>
            <div className="edit__btn delete" onClick={this.handleDelete}>
              <span>削除</span>
              <img src="../storage/images/trash.png" />
            </div>
          </div>
        </>
      );
    }
  }
  appearEditPopup(e) {
    const target = e.target.nextSibling
    if (!target.classList.contains('appear-popup')) {
      target.classList.add('appear-popup')
    } else {
      target.classList.remove('appear-popup')
    }
  }

  judgeBookmark(giftId) {
    const { bookmarks } = this.props;
    const isBookmarked = this.isIncludedOrNot(bookmarks, giftId)

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

  handleBookmark(e) {
    const target = e.target;
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
    const { gift, posts } = this.props;
    return (
      <div className="gift">

        <div className="additional-info">
          <div className="date">{gift.createdAt}</div>
          { posts ? this.judgeOwner(gift.id) : null }
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
