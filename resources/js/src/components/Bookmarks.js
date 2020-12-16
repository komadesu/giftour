import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Gift from "./Gift";
import { readArchives } from "../actions/archives";
import { readBookmarks } from "../actions/bookmarks";

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userId = 2;
    this.props.readArchives();
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
              archives={this.props.archives}
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
  archives: state.archives,
  bookmarks: state.bookmarks
});
const mapDispatchToProps = { readArchives, readBookmarks };
export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
