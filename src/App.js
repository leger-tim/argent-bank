import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignInForm from "./components/SignInForm";
import UserHeader from "./components/UserHeader";
import Account from "./components/Account";
import "./App.css";

const App = () => {
  return (
    <>
      <Header isUserLoggedIn={false} userName="Tony" />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route
            path="/user"
            element={
              <>
                <UserHeader userName="Tony Jarvis" />
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
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
