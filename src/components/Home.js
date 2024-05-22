import React from "react";
import Hero from "./Hero";
import Feature from "./Feature";
import chat from "../img/icon-chat.png";
import money from "../img/icon-money.png";
import security from "../img/icon-security.png";

import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <Hero />
      <section className="features">
        <Feature
          imgSrc={chat}
          imgAlt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          imgSrc={money}
          imgAlt="Money Icon"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          imgSrc={security}
          imgAlt="Security Icon"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </>
  );
};

export default Home;
