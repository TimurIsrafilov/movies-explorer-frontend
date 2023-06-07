import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__menu-container">
        <img className="promo__logo" alt="Лого" src={logo} />
        <div className="promo__menu">
          <Link to="/signup" className="promo__menu-registration">
            {"Регистрация"}
          </Link>
          <button type="submit" className="promo__menu-exit" aria-label="Войти">
            <Link to="/signin" className="promo__menu-exit-text">
              {"Войти"}
            </Link>
          </button>
        </div>
      </div>
      <div className="promo__landing-container">
        <div className="promo__landing">
          <h2 className="promo__landing-text">
            Учебный проект студента факультета Веб-разработки.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Promo;
