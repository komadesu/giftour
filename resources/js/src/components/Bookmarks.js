import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Gift from "./Gift";
import { readBookmarks } from "../actions/bookmarks";

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userId = 2;
    this.props.readBookmarks(userId);
  }

  render() {
    return (
      <div className="bookmarks">
        <div className="bookmarks__navs">
          <Link className="back-btn" to="/mypage">
            <span></span>
          </Link>
          <h4 className="title">Saved</h4>
        </div>
        <div className="gifts">
          {this.props.bookmarks.map(gift => (
            <Gift
              gift={gift}
              bookmarks={this.props.bookmarks}
              key={gift.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookmarks: state.bookmarks
});
const mapDispatchToProps = { readBookmarks };
export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
