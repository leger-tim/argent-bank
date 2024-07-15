// import React from "react";
// import "../styles/SignIn.css";

// const SignInForm = () => {
//   return (
//     <div className="sign-container">
//       <section className="sign-in-content">
//         <i className="fa fa-user-circle sign-in-icon"></i>
//         <h1>Sign In</h1>
//         <form>
//           <div className="input-wrapper">
//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" className="input-style" />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" className="input-style" />
//           </div>
//           <div className="input-remember">
//             <input type="checkbox" id="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <a href="./user" className="sign-in-button">
//             Sign In
//           </a>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default SignInForm;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../actions/authActions";
// import { useNavigate } from "react-router-dom";
// import "../styles/SignIn.css";

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password)).then(() => {
//       if (auth.isAuthenticated) {
//         navigate("/user");
//       }
//     });
//   };

//   return (
//     <div className="sign-container">
//       <section className="sign-in-content">
//         <i className="fa fa-user-circle sign-in-icon"></i>
//         <h1>Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="input-style"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="input-style"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="input-remember">
//             <input type="checkbox" id="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <button type="submit" className="sign-in-button">
//             Sign In
//           </button>
//         </form>
//         {auth.error && <p className="error">{auth.error}</p>}
//       </section>
//     </div>
//   );
// };

// export default SignInForm;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../actions/authActions";
// import { useNavigate } from "react-router-dom";
// import "../styles/SignIn.css";

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password));
//   };

//   useEffect(() => {
//     if (auth.isAuthenticated) {
//       navigate("/user");
//     }
//   }, [auth.isAuthenticated, navigate]);

//   return (
//     <div className="sign-container">
//       <section className="sign-in-content">
//         <i className="fa fa-user-circle sign-in-icon"></i>
//         <h1>Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="input-style"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="input-style"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="input-remember">
//             <input type="checkbox" id="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <button type="submit" className="sign-in-button">
//             Sign In
//           </button>
//         </form>
//         {auth.error && <p className="error">{auth.error}</p>}
//       </section>
//     </div>
//   );
// };

// export default SignInForm;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/user");
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <div className="sign-container">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-style"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-style"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        {auth.error && <p className="error">{auth.error}</p>}
      </section>
    </div>
  );
};

export default SignInForm;
