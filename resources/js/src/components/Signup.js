import React from "react";
import { Link } from "react-router-dom";

import BgTemplate from "./BgTemplate";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__area">
        <h3 className="signup__title">Signup</h3>
        <form className="signup__form" action="#" method="POST">
          <div className="signup__first-page">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input className="input" type="text" id="name" />
            </div>
            <div className="gender">
              <label htmlFor="gender">Gender Identities</label>
              <select id="gender">
                <option></option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="others">others</option>
              </select>
            </div>
            <div className="age">
              <label htmlFor="age">Age</label>
              <input className="input" type="number" id="age" />
            </div>
            <div className="signup__btn-wrapper">
              <input className="btn next-btn" type="button" value="NEXT" />
            </div>
          </div>
          <div className="signup__second-page">
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
              <input className="btn signup-btn" type="button" value="SIGN UP" />
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
};

export default Signup;
