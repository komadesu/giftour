import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Gift from "./Gift";
import Footer from "./Footer";
import { readArchives } from "../actions/archives";
import { readBookmarks } from "../actions/bookmarks";

class Archives extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { userId, accessToken } = this.props;

    this.props.readArchives(userId, accessToken);
    this.props.readBookmarks(userId, accessToken);
  }

  renderArchives(archives) {
    if (!archives.length) {
      return <div className="empty-message">投稿がありません</div>;
    } else {
      return archives.map(gift => (
        <Gift
          gift={gift}
          archives={archives}
          bookmarks={this.props.bookmarks}
          key={gift.id}
        />
      ));
    }
  }

  render() {
    const { archives } = this.props;

    return (
      <div className="archives">
        <div className="archives__navs">
          <Link className="back-btn" to="/mypage">
            <span></span>
          </Link>
          <h4 className="title">Archive</h4>
        </div>
        <div className="gifts">{this.renderArchives(archives)}</div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.auth.access_token,
  userId: state.user.id,
  archives: state.archives,
  bookmarks: state.bookmarks
});
const mapDispatchToProps = { readArchives, readBookmarks };
export default connect(mapStateToProps, mapDispatchToProps)(Archives);
