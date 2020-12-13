import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavHashLink } from "react-router-hash-link";

import Gift from "./Gift";
import { readGifts } from "../actions/gifts";
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
    this.state = {
      formState: false,
      name: this.props.user.name,
      radio: null,
      age: this.props.user.age,
      email: this.props.user.email,
    };
  }

  componentDidMount() {
    const userId = 2;
    this.props.readGifts();
    this.props.readBookmarks(userId);
    this.props.readUser();

    const { gender } = this.props.user
    this.setGenderState(gender)
  }

  setGenderState(value) {
    let genderState
    if (value === 'male') genderState = 1
    if (value === 'female') genderState = 2
    if (value === 'other') genderState = 3
    this.setState({ radio: genderState })
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeGender(e) {
    const gender = e.target.id
    this.setGenderState(gender)
  }
  onChangeAge(e) {
    this.setState({ age: e.target.value })
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  toggleFormState() {
    const { formState } = this.state;
    const nextFormState = !formState ? true : false;
    this.setState({
      formState: nextFormState,
    });
  }
  scrollWidthOffset(el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }

  render() {
    const { user } = this.props;
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
                      checked={this.state.radio === 1}
                      onChange={this.onChangeGender}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      checked={this.state.radio === 2}
                      onChange={this.onChangeGender}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      checked={this.state.radio === 3}
                      onChange={this.onChangeGender}
                    />
                    <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="user-info age">
                  <label htmlFor="form-age" className="label">Age</label>
                  <input type="number" id="form-age" className="content" onChange={this.onChangeAge} />
                </div>
                <div className="user-info email">
                  <label htmlFor="form-email" className="label">Email</label>
                  <input type="email" id="form-email" className="content text-truncate" onChange={this.onChangeEmail} />
                </div>
                <div className="btn-wrapper">
                  <input
                    className="btn btn__reverse"
                    type="button"
                    value="Cancel"
                    onClick={this.toggleFormState}
                  />
                </div>
              </div>
              <div className="logo">GIFTOUR</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gifts: state.gifts,
  bookmarks: state.bookmarks,
  user: state.user,
});
const mapDispatchToProps = { readGifts, readBookmarks, readUser };
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
