import React from "react";

import Navigation from "../Navigation/Navigation.js";

import { BASIC_URL } from "../../utils/Constants";

function Header(props) {
  return (
    <header
      className={`header ${
        window.location.href == `${BASIC_URL}/` ||
        window.location.href == `${BASIC_URL}/#aboutproject` ||
        window.location.href == `${BASIC_URL}/#techs` ||
        window.location.href == `${BASIC_URL}/#aboutme`
          ? "header_main"
          : ""
      }`}
    >
      <div className="header__container_main">
        <Navigation loggedIn={props.loggedIn} onOpen={props.onOpen} />
      </div>
    </header>
  );
}

export default Header;

// className={`popup__menu-item ${
//   window.location.href == `${BASIC_URL}/`
//     ? "popup__menu-item_active"
//     : ""
// }`}
