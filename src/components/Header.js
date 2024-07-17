import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAndRedirect } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import logo from "../img/argentBankLogo.png";
import "../styles/Header.css";
import userIcon from "../img/user-circle-svgrepo-com.png"; // Renommé pour éviter la confusion avec 'user'
import signOut from "../img/sign-out-option.png";

const Header = ({ isUserLoggedIn, userName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAndRedirect(navigate));
  };

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
            <Link className="main-nav-item" to="/user">
              <img
                className="nav-user-icon"
                src={userIcon}
                alt="Sign in icon"
              />
              {userName}
            </Link>
            <button className="main-nav-item" onClick={handleLogout}>
              <img className="sign-out" src={signOut} alt="Sign out icon" />
              Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <img className="nav-user-icon" src={userIcon} alt="Sign in icon" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
