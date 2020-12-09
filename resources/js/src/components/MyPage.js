import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import Gift from "./Gift";
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

  render() {
    const { user } = this.props
    return (
      <div className="mypage">
        <div className="mypage__archive mypage__area">
          <h4 className="title">Archive</h4>
          <div className="gifts">
            <Gift gift={this.props.gifts[1]} bookmarks={this.props.bookmarks} />
            <Gift gift={this.props.gifts[2]} bookmarks={this.props.bookmarks} />
          </div>
        </div>
        <div className="mypage__saved mypage__area">
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
          </div>
        </div>
        <div className="mypage__settings mypage__area">
          <h4 className="title">Settings</h4>
          <div className="user-infos">
            <div className="user-info name">
              <span className="label">Name</span>
              <span className="content">{user.name}</span>
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
              <span className="content">{user.email}</span>
            </div>
          </div>
        </div>
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
