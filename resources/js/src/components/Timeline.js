import React from "react";
import { connect } from "react-redux";

import Search from "./Search";
import { readGifts } from "../actions";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.renderGifts = this.renderGifts.bind(this);
  }

  componentDidMount() {
    this.props.readGifts();
  }

  handlePostFlag(postFlag) {
    if (postFlag === 1) {
      return "I gave";
    } else {
      return "I got";
    }
  }

  handlePrice(price) {
    if (price) {
      return `¥${price}`;
    } else {
      return "¥ ー "
    }
  }

  renderGifts() {
    return _.map(this.props.gifts, gift => (
      <div key={gift.id} className="gift">
        <div className="date">&nbsp;{gift.createdAt}</div>
        <div className="gift__box">
          <div className="bookmark-wrapper">
            <button></button>
          </div>
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
    ));
  }

  render() {
    return (
      <div className="timeline">
        <Search />
        <div className="gifts">{this.renderGifts()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ gifts: state.gifts });
const mapDispatchToProps = { readGifts };
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
