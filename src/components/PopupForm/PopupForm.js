import React from "react";

import { Link } from "react-router-dom";

import {
  // BASIC_URL,
  BASIC_HTTP_URL,
  BASIC_HTTPS_URL,
} from "../../utils/Constants";

function PopupForm(props) {
  return (
    <>
      {props.isOpen ? (
        <section className="popup">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close-icon"
              aria-label="закрыть форму"
              onClick={props.onClose}
            ></button>
            <div className="popup__menu-container" onClick={props.onClose}>
              <div className="popup__menu">
                <Link
                  to="/"
                  className={`popup__menu-item ${
                    window.location.href === `${BASIC_HTTP_URL}/` ||
                    window.location.href === `${BASIC_HTTPS_URL}/`
                      ? "popup__menu-item_active"
                      : ""
                  }`}
                >
                  {"Главная"}
                </Link>
                <Link
                  to="/movies"
                  className={`popup__menu-item ${
                    window.location.href === `${BASIC_HTTP_URL}/movies` ||
                    window.location.href === `${BASIC_HTTPS_URL}/movies`
                      ? "popup__menu-item_active"
                      : ""
                  }`}
                >
                  {"Фильмы"}
                </Link>
                <Link
                  to="/saved-movies"
                  className={`popup__menu-item ${
                    window.location.href === `${BASIC_HTTP_URL}/saved-movies` ||
                    window.location.href === `${BASIC_HTTPS_URL}/saved-movies`
                      ? "popup__menu-item_active"
                      : ""
                  }`}
                >
                  {"Сохранённые фильмы"}
                </Link>
              </div>
              <Link to="/profile" className="popup__profile">
                <p className="popup__profile-text" aria-label="Аккаунт">
                  Аккаунт
                </p>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default PopupForm;
