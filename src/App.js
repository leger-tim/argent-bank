import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignInForm from "./components/SignInForm";
import User from "./components/User";
import "./App.css";

const App = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Header
        isUserLoggedIn={auth.isAuthenticated}
        userName={auth.user ? auth.user.firstName : "Guest"}
      />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
