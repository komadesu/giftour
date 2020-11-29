import React from "react";
import { Link } from "react-router-dom";

import BgTemplate from "./BgTemplate";

const Login = () => {
  return (
    <div className="login">
      <div className="login__area">
        <h3 className="login__title">Login</h3>
        <form className="login__form" action="#" method="POST">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input className="input" type="mail" id="email" />
          </div>
          <div className="pw">
            <label htmlFor="pw">Password</label>
            <input className="input" type="password" id="pw" />
          </div>
          <div className="login__btn-wrapper">
            <input className="btn signin-btn" type="button" value="SIGN IN" />
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
};

export default Login;
