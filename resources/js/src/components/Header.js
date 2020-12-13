import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__logo header__link" to="/">
        <img src="../storage/images/giftour-logo1.svg" />
      </Link>
      <div className="header__navs">
        <Link className="nav header__link" to="/timeline">
          Timeline
        </Link>
        <Link className="nav header__link" to="/mypage">
          Mypage
        </Link>
        <Link className="nav header__link" to="/post">
          Post
        </Link>
        <Link className="nav header__link" to="/contact">
          Contact
        </Link>
      </div>
      <Link className="header__login header__link" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Header;
