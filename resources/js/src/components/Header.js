import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__logo header__link" to="#">
        <img src="../storage/images/giftour-logo1.svg" />
      </Link>
      <div className="header__navs">
        <Link className="nav header__link" to="/timeline">
          timeline
        </Link>
        <Link className="nav header__link" to="/mypage">
          mypage
        </Link>
        <Link className="nav header__link" to="/post">
          post
        </Link>
        <Link className="nav header__link" to="#">
          contact
        </Link>
      </div>
      <Link className="header__login header__link" to="/login">
        login
      </Link>
    </div>
  );
};

export default Header;
