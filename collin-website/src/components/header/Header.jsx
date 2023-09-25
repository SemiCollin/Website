import React from "react";
import "./header.css";
import CTA from "./CTA";
import Socials from "./Socials";
import Me from "../../assets/Collin.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Collin Kwan</h1>
        <h5 className="text-light">Mechatronics Engineer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={Me} alt="Collin Kwan" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
