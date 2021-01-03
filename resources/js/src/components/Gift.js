import React, { Component } from "react";
import { connect } from "react-redux";

import Edit from './Edit'
import { createBookmark, deleteBookmark } from "../actions/bookmarks"

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
          onClick={e => this.handleBookmark(e, giftId)}
        ></button>
      );
    } else {
      return <button onClick={e => this.handleBookmark(e, giftId)}></button>;
    }
  }

  handleBookmark(e, giftId) {
    const target = e.target;
    const { deleteBookmark, createBookmark, user, accessToken } = this.props;

    if (Object.keys(user).length) {
      const userId = user.id

      if (target.classList.contains("is-bookmarked")) {
        deleteBookmark(giftId, userId, accessToken)
        target.classList.remove("is-bookmarked");
      } else {
        createBookmark(giftId, userId, accessToken);
        target.classList.add("is-bookmarked");
      }

    } else {
      alert("ブックマークは、ログインしたユーザーのみ使用可能です")
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
              <img src={`storage/images/${gift.image_file_name}`} />
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

const mapStateToProps = state => ({
  accessToken: state.auth.access_token,
  user: state.user
})
const mapDispatchToProps = { createBookmark, deleteBookmark };
export default connect(mapStateToProps, mapDispatchToProps)(Gift);
