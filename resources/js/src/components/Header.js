import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__logo header__link" to="#">
        Logo
      </Link>
      <div className="header__navs">
        <Link className="nav header__link" to="#">
          timeline
        </Link>
        <Link className="nav header__link" to="#">
          My page
        </Link>
        <Link className="nav header__link" to="#">
          contact
        </Link>
      </div>
      <Link className="header__login header__link" to="#">
        Log in
      </Link>

      <img src="../storage/img/hill.jpg" alt="image test" />
    </div>
  );
};

export default Header;
