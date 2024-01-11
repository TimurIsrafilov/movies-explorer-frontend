import React from "react";

import Navigation from "../Navigation/Navigation.js";

import {
  // BASIC_URL,
  BASIC_HTTP_URL,
  BASIC_HTTPS_URL,
} from "../../utils/Constants";

function Header(props) {
  return (
    <header
      className={`header ${
        // window.location.href === `${BASIC_URL}/` ||
        // window.location.href === `${BASIC_URL}/#aboutproject` ||
        // window.location.href === `${BASIC_URL}/#techs` ||
        // window.location.href === `${BASIC_URL}/#aboutme` ||
        window.location.href === `${BASIC_HTTP_URL}/` ||
        window.location.href === `${BASIC_HTTPS_URL}/` ||
        window.location.href === `${BASIC_HTTP_URL}/#aboutproject` ||
        window.location.href === `${BASIC_HTTPS_URL}/#aboutproject` ||
        window.location.href === `${BASIC_HTTP_URL}/#techs` ||
        window.location.href === `${BASIC_HTTPS_URL}/#techs` ||
        window.location.href === `${BASIC_HTTP_URL}/#aboutme` ||
        window.location.href === `${BASIC_HTTPS_URL}/#aboutme`
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
