import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavHashLink } from "react-router-hash-link";

import Gift from "./Gift";
import Footer from "./Footer";
import { readGifts } from "../actions/gifts";
import { readBookmarks } from "../actions/bookmarks";
import { readUser } from "../actions/user";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userId = 2;
    this.props.readGifts();
    this.props.readBookmarks(userId);
    this.props.readUser();
  }

  scrollWidthOffset(el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }

  render() {
    const { user } = this.props;
    return (
      <div className="mypage">
        <div className="mypage__navs">
          <NavHashLink
            className="mypage__nav"
            to="/MyPage#archive"
            scroll={this.scrollWidthOffset}
          >
            Archive
          </NavHashLink>
          <NavHashLink
            className="mypage__nav"
            to="/MyPage#saved"
            scroll={this.scrollWidthOffset}
          >
            Saved
          </NavHashLink>
          <NavHashLink
            className="mypage__nav"
            to="/MyPage#settings"
            scroll={this.scrollWidthOffset}
          >
            Settings
          </NavHashLink>
        </div>
        <div className="mypage__areas">
          <div className="area" id="archive">
            <h4 className="title">Archive</h4>
            <div className="gifts">
              <Gift
                gift={this.props.gifts[1]}
                bookmarks={this.props.bookmarks}
              />
              <Gift
                gift={this.props.gifts[2]}
                bookmarks={this.props.bookmarks}
              />
              <div className="more">
                <Link className="more-btn" to="#">
                  +more
                </Link>
              </div>
            </div>
          </div>
          <div className="area" id="saved">
            <h4 className="title">Saved</h4>
            <div className="gifts">
              <Gift
                gift={this.props.bookmarks[0]}
                bookmarks={this.props.bookmarks}
              />
              <Gift
                gift={this.props.bookmarks[1]}
                bookmarks={this.props.bookmarks}
              />
              <div className="more">
                <Link className="more-btn" to="#">
                  +more
                </Link>
              </div>
            </div>
          </div>
          <div className="area" id="settings">
            <h4 className="title">Settings</h4>
            <div className="user-infos-wrapper">
              <div className="user-infos">
                <div className="user-info name">
                  <span className="label">Name</span>
                  <span className="content text-truncate">{user.name}</span>
                </div>
                <div className="user-info gender">
                  <span className="label">Gender</span>
                  <span className="content">{user.gender}</span>
                </div>
                <div className="user-info age">
                  <span className="label">Age</span>
                  <span className="content">{user.age}</span>
                </div>
                <div className="user-info email">
                  <span className="label">Email</span>
                  <span className="content text-truncate">{user.email}</span>
                </div>
                <div className="btn-wrapper">
                  <input className="btn btn__reverse" type="button" value="Edit" />
                </div>
              </div>
              <div className="logo">GIFTOUR</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifts: state.gifts,
  bookmarks: state.bookmarks,
  user: state.user
});
const mapDispatchToProps = { readGifts, readBookmarks, readUser };
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
