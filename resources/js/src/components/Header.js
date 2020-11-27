import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link className="header__logo" to="#">
          Logo
        </Link>
        <div className="header__navs">
          <Link className="nav" to="#">
            genre
          </Link>
          <Link className="nav" to="#">
            timeline
          </Link>
          <Link className="nav" to="#">
            My page
          </Link>
          <Link className="nav" to="#">
            contact
          </Link>
        </div>
        <Link className="header__login" to="#">
          Log in
        </Link>
      </div>
    );
  }
}

export default Header;
