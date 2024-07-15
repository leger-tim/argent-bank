// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../img/argentBankLogo.png";
// import "../styles/Header.css";
// import user from "../img/user-circle-svgrepo-com.png";

// const Header = ({ isUserLoggedIn, userName }) => {
//   return (
//     <nav className="main-nav">
//       <Link className="main-nav-logo" to="/">
//         <img
//           className="main-nav-logo-image"
//           src={logo}
//           alt="Argent Bank Logo"
//         />
//       </Link>
//       <div>
//         {isUserLoggedIn ? (
//           <>
//             <Link className="main-nav-item" to="/user">
//               <i className="fa fa-user-circle"></i>
//               {userName}
//             </Link>
//             <Link className="main-nav-item" to="/">
//               <i className="fa fa-sign-out"></i>
//               Sign Out
//             </Link>
//           </>
//         ) : (
//           <Link className="main-nav-item" to="/sign-in">
//             <img className="nav-user-icon" src={user} alt="Sign in icon" />
//             Sign In
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAndRedirect } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import logo from "../img/argentBankLogo.png";
import "../styles/Header.css";
import userIcon from "../img/user-circle-svgrepo-com.png"; // Renommé pour éviter la confusion avec 'user'

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
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
            <button className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
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
