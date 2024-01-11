import React from "react";

import AboutMe from "../AboutMe/AboutMe.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import NavTab from "../NavTab/NavTab.js";
import Portfolio from "../Portfolio/Portfolio.js";
import PopupForm from "../PopupForm/PopupForm.js";
import Promo from "../Promo/Promo.js";
import Techs from "../Techs/Techs.js";

function Main(props) {
  return (
    <div className="main">
      <Header loggedIn={props.loggedIn} onOpen={props.onOpen} />
      <main className="content">
        <Promo />
        <NavTab
          aboutproject={"#aboutproject"}
          techs={"#techs"}
          aboutme={"#aboutme"}
        />
        <AboutProject aboutProjectId={"aboutproject"} />
        <Techs techsId={"techs"} />
        <AboutMe aboutMeId={"aboutme"} />
        <Portfolio />
      </main>
      <Footer />
      <PopupForm onClose={props.onClose} isOpen={props.isOpen} />
    </div>
  );
}

export default Main;
