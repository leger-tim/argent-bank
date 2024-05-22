import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/argentBankLogo.png";
import "../styles/Header.css";
import user from "../img/user-circle-svgrepo-com.png";

const Header = ({ isUserLoggedIn, userName }) => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        {isUserLoggedIn ? (
          <>
            <Link className="main-nav-item" to="/user.html">
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
            <Link className="main-nav-item" to="/index.html">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <img className="nav-user-icon" src={user} alt="Sign in icon" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
