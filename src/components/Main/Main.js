import React from "react";

import AboutMe from "../AboutMe/AboutMe.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Footer from "../Footer/Footer.js";
import NavTab from "../NavTab/NavTab.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Promo from "../Promo/Promo.js";
import Techs from "../Techs/Techs.js";

function Main() {
  return (
    <div className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Main;
