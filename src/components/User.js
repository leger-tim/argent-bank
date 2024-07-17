import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfile, updateProfile } from "../actions/authActions";
import UserHeader from "./UserHeader";
import Account from "./Account";
import "../styles/User.css";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (auth.isAuthenticated && auth.user?.token) {
      dispatch(fetchProfile(auth.user.token));
    } else {
      navigate("/sign-in");
    }
  }, [auth.isAuthenticated, dispatch, auth.user?.token, navigate]);

  useEffect(() => {
    if (auth.user) {
      setFirstName(auth.user.firstName);
      setLastName(auth.user.lastName);
    }
  }, [auth.user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const nameRegex = /^[A-Za-z]{1,10}$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      setError("Names must be letters only and up to 10 characters.");
      return;
    }
    setError("");
    dispatch(updateProfile(auth.user.token, { firstName, lastName }));
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setFirstName(auth.user.firstName);
    setLastName(auth.user.lastName);
    setIsEditing(false);
    setError("");
  };
  if (!auth.isAuthenticated) {
    return <p>You need to login to view this page.</p>;
  }

  return (
    <div className="user-container">
      <UserHeader userName={auth.user?.firstName + " " + auth.user?.lastName} />
      {isEditing ? (
        <div className="edit-name-form">
          <input
            className="name-edit"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            maxLength="10"
          />
          <input
            className="name-edit"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            maxLength="10"
          />
          <button onClick={handleSaveClick} className="save-button">
            Save
          </button>
          <button onClick={handleCancelClick} className="save-button">
            Cancel
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <button onClick={handleEditClick} className="edit-button">
          Edit Name
        </button>
      )}
      <section className="accounts">
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </section>
    </div>
  );
};

export default User;
