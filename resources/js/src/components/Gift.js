import React, { Component } from "react";

import Edit from './Edit'

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
    const { archives } = this.props;
    const isOwned = this.isIncludedOrNot(archives, giftId)

    return isOwned
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

  judgeOpponentGender(genderId) {
    let opponentGender
    if (genderId === 1) opponentGender = 'male'
    if (genderId === 2) opponentGender = 'female'
    if (genderId === 3) opponentGender = 'others'
    return opponentGender
  }

  render() {
    const { gift, archives } = this.props;
    console.log(gift)

    return (
      <div className="gift">

        <div className="additional-info">
          <div className="date">{gift.created_at}</div>
          { archives && this.judgeOwner(gift.id) ? <Edit giftId={gift.id} /> : null }
        </div>

        <div className="gift__box">
          <div className="bookmark-wrapper">{this.judgeBookmark(gift.id)}</div>
          <h5 className="name">{gift.name}</h5>
          <div className="box-bottom">
            <div className="img-wrapper">
              <img src={`../storage/images/${gift.image_file_name}`} />
            </div>

            <div className="details">
              <div className="main-info">
                <div className="brand">Brand&nbsp;:&nbsp;{gift.brand}</div>
                <div className="opponent">
                  For&nbsp;{this.judgeOpponentGender(gift.opponent_gender_id)},&nbsp;({gift.opponent_age})
                </div>
              </div>

              <div className="sub-info">
                <div className="post-flag">
                  {this.handlePostFlag(gift.post_flag)}
                </div>
                <div className="category">{gift.category.category}</div>
                <div className="situation">{gift.situation.situation}</div>
                <div className="relationship">{gift.relationship.relationship}</div>
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
