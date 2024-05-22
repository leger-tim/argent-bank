import React from "react";
import back from "../img/bank-tree.jpeg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <img className="back-logo-image" src={back} alt="Argent Bank Logo" />
        <div className="subs-style">
          <div className="subs-container">
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
