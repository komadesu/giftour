import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import BgTemplate from "./BgTemplate";
import { judgeUser } from "../actions/auth";
import { readUser } from "../actions/user";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      email: "",
      password: ""
    }
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value })
  }
  onChangePassword(e) {
    this.setState({password: e.target.value })
  }
  async handleLogin(e) {
    e.preventDefault();
    const { judgeUser, readUser } = this.props
    const { email, password } = this.state
    await judgeUser(email, password)

    const { accessToken } = this.props
    await readUser(accessToken)

    this.props.history.push('/mypage')
    alert("ログインしました！");
  }

  render() {
    return (
      <div className="login">
        <div className="login__area">
          <h3 className="login__title">Login</h3>
          <form className="login__form" onSubmit={this.handleLogin}>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className="input"
                type="mail"
                id="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="pw">
              <label htmlFor="pw">Password</label>
              <input
                className="input"
                type="password"
                id="pw"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="login__btn-wrapper">
              <input className="btn signin-btn" type="submit" value="SIGN IN" />
            </div>
          </form>
          <p className="login__message">
            By continuing, you agree to accept our <br /> Privacy Policy &amp;
            Terms of Service.
          </p>
          <div className="login__to-signup">
            Don’t have an account?
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
        <BgTemplate />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.auth.access_token
})
const mapDispatchToProps = { judgeUser, readUser };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
