import React from "react";
import "../styles/UserHeader.css";

const UserHeader = ({ userName }) => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
    </div>
  );
};

export default UserHeader;
