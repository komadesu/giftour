import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import BgTemplate from "./BgTemplate";
import { createUser } from "../actions/auth";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.goToNextForm = this.goToNextForm.bind(this);
    this.goToPreviousForm = this.goToPreviousForm.bind(this);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isFirstOrSecond: true,
      name: "",
      gender: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeGender(e) {
    this.setState({ gender: e.target.value });
  }
  onChangeAge(e) {
    this.setState({ age: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangeConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault()
    const { createUser } = this.props
    const { name, gender, age, email, password, confirmPassword } = this.state
    createUser(name, gender, age, email, password, confirmPassword)
  }

  goToNextForm() {
    this.setState({
      isFirstOrSecond: false
    });
  }

  goToPreviousForm() {
    this.setState({
      isFirstOrSecond: true
    });
  }

  render() {
    return (
      <div className="signup">
        <div className="signup__area">
          <h3 className="signup__title">Signup</h3>
          <form className="signup__form" onSubmit={this.handleSubmit}>
            <div
              className={
                this.state.isFirstOrSecond
                  ? "signup__first-form is-appeared"
                  : "signup__first-form"
              }
            >
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  className="input"
                  type="text"
                  id="name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="gender">
                <label htmlFor="gender">Gender Identities</label>
                <select
                  className="input"
                  id="gender"
                  value={this.state.gender}
                  onChange={this.onChangeGender}
                >
                  <option></option>
                  <option value="1">male</option>
                  <option value="2">female</option>
                  <option value="3">others</option>
                </select>
              </div>
              <div className="age">
                <label htmlFor="age">Age</label>
                <input
                  className="input"
                  type="number"
                  id="age"
                  value={this.state.age}
                  onChange={this.onChangeAge}
                />
              </div>
              <div className="signup__btn-wrapper">
                <input
                  className="btn next-btn"
                  onClick={this.goToNextForm}
                  type="button"
                  value="NEXT"
                />
              </div>
            </div>
            <div
              className={
                this.state.isFirstOrSecond
                  ? "signup__second-form"
                  : "signup__second-form is-appeared"
              }
            >
              <input
                className="previous-btn"
                onClick={this.goToPreviousForm}
                type="button"
                value="←"
              />
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
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="re-pw">
                <label htmlFor="re-pw">Confirm Password</label>
                <input
                  className="input"
                  type="password"
                  id="re-pw"
                  value={this.state.confirmPassword}
                  onChange={this.onChangeConfirmPassword}
                />
              </div>
              <div className="signup__btn-wrapper">
                <input
                  className="btn signup-btn"
                  type="submit"
                  value="SIGN UP"
                />
              </div>
            </div>
          </form>
          <p className="signup__message">
            By continuing, you agree to accept our <br /> Privacy Policy &amp;
            Terms of Service.
          </p>
          <div className="signup__to-login">
            Already have an account?
            <Link className="link" to="/login">
              Log In
            </Link>
          </div>
        </div>
        <BgTemplate />
      </div>
    );
  }
}

const mapDispatchToProps = { createUser };
export default connect(null, mapDispatchToProps)(Signup);
