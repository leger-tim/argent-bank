import React from "react";
import "../styles/SignIn.css";

const SignInForm = () => {
  return (
    <div className="sign-container">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="input-style" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input-style" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="./user" className="sign-in-button">
            Sign In
          </a>
        </form>
      </section>
    </div>
  );
};

export default SignInForm;
