import React from "react";

import { Link } from "react-router-dom";

function PopupForm() {
  return (
    <section className="popup">
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-icon"
          aria-label="закрыть форму"
        ></button>
        <div className="popup__menu-container">
          <div className="popup__menu">
            <Link to="/" className="popup__menu-item popup__menu-item_active">
              {"Главная"}
            </Link>
            <Link
              to="/movies"
              className="popup__menu-item popup__menu-item_active"
            >
              {"Фильмы"}
            </Link>
            <Link
              to="/saved-movies"
              className="popup__menu-item popup__menu-item_active"
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
  );
}

export default PopupForm;
