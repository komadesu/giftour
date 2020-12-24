import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import Search from "./Search";
import Gift from "./Gift";
import Footer from "./Footer";
import { readGifts } from "../actions/gifts";
import { readBookmarks } from "../actions/bookmarks";

class Timeline extends React.Component {
  componentDidMount() {
    const userId = 2;
    this.props.readGifts();
    this.props.readBookmarks(userId);
  }

  render() {
    return (
      <div className="timeline">
        <Search />
        <div className="gifts">
          {_.map(this.props.gifts, gift => (
            <Gift gift={gift} bookmarks={this.props.bookmarks} key={gift.id} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifts: state.gifts,
  bookmarks: state.bookmarks
});
const mapDispatchToProps = { readGifts, readBookmarks };
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
