import React from "react";
import { Link } from "react-router-dom";

import BgTemplate from "./BgTemplate";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstOrSecond: true
    };
    this.goToNextForm = this.goToNextForm.bind(this);
    this.goToPreviousForm = this.goToPreviousForm.bind(this);
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
          <form className="signup__form">
            <div
              className={
                this.state.isFirstOrSecond
                  ? "signup__first-form is-appeared"
                  : "signup__first-form"
              }
            >
              <div className="name">
                <label htmlFor="name">Name</label>
                <input className="input" type="text" id="name" />
              </div>
              <div className="gender">
                <label htmlFor="gender">Gender Identities</label>
                <select className="input" id="gender">
                  <option></option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="age">
                <label htmlFor="age">Age</label>
                <input className="input" type="number" id="age" />
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
                <input className="input" type="mail" id="email" />
              </div>
              <div className="pw">
                <label htmlFor="pw">Password</label>
                <input className="input" type="password" id="pw" />
              </div>
              <div className="re-pw">
                <label htmlFor="re-pw">Confirm Password</label>
                <input className="input" type="password" id="re-pw" />
              </div>
              <div className="signup__btn-wrapper">
                <input
                  className="btn signup-btn"
                  type="button"
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

export default Signup;
