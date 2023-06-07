import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu-container">
          <Link to="/" className="header__logo">
            <img alt="Лого" src={logo} />
          </Link>
          <div className="header__menu">
            <Link to="/movies" className="header__menu-film">
              {"Фильмы"}
            </Link>
            <Link to="/saved-movies" className="header__menu-saved">
              {"Сохранённые фильмы"}
            </Link>
          </div>
        </div>
        <div className="header__buttons">
          <button className="header__profile" aria-label="Аккаунт">
            <Link to="/profile" className="header__profile-text">
              {"Аккаунт"}
            </Link>
          </button>
          <button className="header__menu-icon" aria-label="Меню"></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
