import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavHashLink } from "react-router-hash-link";

import Gift from "./Gift";
import Footer from "./Footer";
import { readArchives } from "../actions/archives";
import { readBookmarks } from "../actions/bookmarks";
import { readUser } from "../actions/user";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFormState = this.toggleFormState.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);

    const { user } = props;
    this.state = {
      formState: false,
      name: user.name,
      gender: null,
      age: user.age,
      email: user.email
    };
  }

  componentDidMount() {
    const { userId, accessToken } = this.props;

    this.props.readArchives(userId, accessToken);
    this.props.readBookmarks(userId, accessToken);

    const { gender } = this.props.user;
    this.setGenderState(gender);
  }

  setGenderState(value) {
    let genderState;
    if (value === "male") genderState = 1;
    if (value === "female") genderState = 2;
    if (value === "other") genderState = 3;
    this.setState({ gender: genderState });
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeGender(e) {
    const gender = e.target.id;
    this.setGenderState(gender);
  }
  onChangeAge(e) {
    this.setState({ age: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  toggleFormState() {
    const { formState } = this.state;
    const nextFormState = !formState ? true : false;
    this.setState({
      formState: nextFormState
    });
  }
  scrollWidthOffset(el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }

  renderArchives(archives) {
    if (!archives.length) {
      return <div className="empty-message">投稿がありません</div>;
    } else if (archives.length === 1) {
      return (
        <Gift
          gift={this.props.archives[0]}
          archives={this.props.archives}
          bookmarks={this.props.bookmarks}
        />
      )
    } else if (archives.length >= 2) {
      return (
        <>
          <Gift
            gift={this.props.archives[0]}
            archives={this.props.archives}
            bookmarks={this.props.bookmarks}
          />
          <Gift
            gift={this.props.archives[1]}
            archives={this.props.archives}
            bookmarks={this.props.bookmarks}
          />
        </>
      );
    }
  }
  renderBookmarks(bookmarks) {
    if (!bookmarks.length) {
      return <div className="empty-message">Saveした投稿がありません</div>;
    } else if (bookmarks.length === 1) {
      return (
        <Gift
          gift={this.props.bookmarks[0]}
          archives={this.props.archives}
          bookmarks={this.props.bookmarks}
        />
      )
    } else if (bookmarks.length >= 2) {
      return (
        <>
          <Gift
            gift={this.props.bookmarks[0]}
            archives={this.props.archives}
            bookmarks={this.props.bookmarks}
          />
          <Gift
            gift={this.props.bookmarks[1]}
            archives={this.props.archives}
            bookmarks={this.props.bookmarks}
          />
        </>
      );
    }
  }

  render() {
    const { user, archives, bookmarks } = this.props;
    const { formState } = this.state;

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
              {this.renderArchives(archives)}
              <div className="more">
                <Link className="more-btn" to="/mypage/archives">
                  +more
                </Link>
              </div>
            </div>
          </div>

          <div className="area" id="saved">
            <h4 className="title">Saved</h4>
            <div className="gifts">
              {this.renderBookmarks(bookmarks)}
              <div className="more">
                <Link className="more-btn" to="/mypage/bookmarks">
                  +more
                </Link>
              </div>
            </div>
          </div>

          <div className="area" id="settings">
            <h4 className="title">Settings</h4>

            <div className="user-infos-wrapper">
              <div className={formState ? "user-infos" : "user-infos display"}>
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
                  <input
                    className="btn btn__reverse"
                    type="button"
                    value="Edit"
                    onClick={this.toggleFormState}
                  />
                </div>
              </div>

              <div className={formState ? "user-infos display" : "user-infos"}>
                <div className="user-info name">
                  <label htmlFor="form-name" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    className="content text-truncate"
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                </div>
                <div className="user-info gender">
                  <span className="label">Gender</span>
                  <div className="radio-content">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      checked={this.state.gender === 1}
                      onChange={this.onChangeGender}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      checked={this.state.gender === 2}
                      onChange={this.onChangeGender}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      checked={this.state.gender === 3}
                      onChange={this.onChangeGender}
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
                <div className="user-info age">
                  <label htmlFor="form-age" className="label">
                    Age
                  </label>
                  <input
                    type="number"
                    id="form-age"
                    className="content"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                  />
                </div>
                <div className="user-info email">
                  <label htmlFor="form-email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    className="content text-truncate"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div className="btn-wrapper">
                  <input
                    className="btn btn__reverse"
                    type="button"
                    value="Cancel"
                    onClick={this.toggleFormState}
                  />
                  <input
                    className="btn btn__reverse"
                    type="button"
                    value="Update"
                    onClick={this.toggleFormState}
                  />
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
  accessToken: state.auth.access_token,
  userId: state.user.id,
  archives: state.archives,
  bookmarks: state.bookmarks,
  user: state.user
});
const mapDispatchToProps = { readArchives, readBookmarks, readUser };
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
