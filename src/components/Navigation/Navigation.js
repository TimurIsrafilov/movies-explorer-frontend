import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

import {
  // BASIC_URL,
  BASIC_HTTP_URL,
  BASIC_HTTPS_URL,
} from "../../utils/Constants";

function Navigation(props) {
  function openPopup() {
    props.onOpen();
  }

  return (
    <div className="navigation">
      <div className="navigation__container">
        <Link to="/" className="navigation__logo">
          <img alt="Лого" src={logo} />
        </Link>

        <div className="navigation__menu_registered">
          <div className="navigation__menu-container">
            {props.loggedIn ? (
              <Link to="/movies" className="navigation__menu-movie">
                {"Фильмы"}
              </Link>
            ) : (
              ""
            )}

            {props.loggedIn ? (
              <Link to="/saved-movies" className="navigation__menu-saved">
                {"Сохранённые фильмы"}
              </Link>
            ) : (
              ""
            )}
          </div>

          <div className="navigation__buttons">
            {props.loggedIn ? (
              <Link to="/profile" className="navigation__profile">
                <p className="navigation__profile-text" aria-label="Аккаунт">
                  Аккаунт
                </p>
              </Link>
            ) : (
              ""
            )}
            {props.loggedIn ? (
              <button
                className={`navigation__menu-icon ${
                  window.location.href === `${BASIC_HTTP_URL}/` ||
                  window.location.href === `${BASIC_HTTPS_URL}/` ||
                  window.location.href === `${BASIC_HTTP_URL}/#aboutproject` ||
                  window.location.href === `${BASIC_HTTPS_URL}/#aboutproject` ||
                  window.location.href === `${BASIC_HTTP_URL}/#techs` ||
                  window.location.href === `${BASIC_HTTPS_URL}/#techs` ||
                  window.location.href === `${BASIC_HTTP_URL}/#aboutme` ||
                  window.location.href === `${BASIC_HTTPS_URL}/#aboutme`
                    ? "navigation__menu-icon_main"
                    : ""
                }`}
                aria-label="Меню"
                onClick={openPopup}
              ></button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="navigation__menu_unregistered">
          {props.loggedIn ? (
            ""
          ) : (
            <Link to="/signup" className="navigation__menu-registration">
              {"Регистрация"}
            </Link>
          )}
          {props.loggedIn ? (
            ""
          ) : (
            <Link to="/signin" className="navigation__menu-exit">
              <p className="navigation__menu-exit-text" aria-label="Войти">
                Войти
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
