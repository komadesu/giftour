import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteUser } from "../actions/user";
import { deleteAuth } from "../actions/auth";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.judgeUserState = this.judgeUserState.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.judgeUserState()
    };
  }

  judgeUserState() {
    const { user } = this.props;
    if (0 !== Object.keys(user).length) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleLogout() {
    const { deleteUser, deleteAuth } = this.props
    deleteUser();
    deleteAuth();
    alert("ログアウトしました！");
  }

  render() {
    return (
      <div className="header">
        <Link className="header__logo header__link" to="/">
          <img src="../storage/images/giftour-logo2.png" />
        </Link>
        <div className="header__navs">
          <Link className="nav header__link" to="/timeline">
            Timeline
          </Link>
          <Link className="nav header__link" to="/mypage">
            Mypage
          </Link>
          <Link className="nav header__link" to="/new">
            Post
          </Link>
          <Link className="nav header__link" to="/about">
            About
          </Link>
        </div>
        <Link
          className={
            this.state.isLoggedIn
              ? "header__login-logout header__link"
              : "header__login-logout header__link is-appeared"
          }
          to="/login"
        >
          Login
        </Link>
        <Link
          className={
            this.state.isLoggedIn
              ? "header__login-logout header__link is-appeared"
              : "header__login-logout header__link"
          }
          onClick={this.handleLogout}
          to="/timeline"
        >
          Logout
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = { deleteUser, deleteAuth }
export default connect(mapStateToProps, mapDispatchToProps)(Header);
