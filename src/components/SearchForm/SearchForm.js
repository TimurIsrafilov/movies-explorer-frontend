import React from "react";

import tumbler_icon from "../../images/tumbler_icon.svg";
import search_icon from "../../images/search_icon.svg";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__container-serch">
          <div className="search-form__container-input">
            <div className="search-form__logo-loop" alt="Лупа"></div>
            <input
              id="search-film-input"
              type="text"
              placeholder="Фильм"
              name="search-film"
              required
              className="search-form__input"
            />
          </div>
          <img
            className="search-form__search-icon"
            alt="Поиск"
            src={search_icon}
          />
        </div>
        <div className="search-form__container-icon">
          <img
            className="search-form__tumbler"
            alt="Поиск"
            src={tumbler_icon}
          />
          <span className="search-form__logo-span">Короткометражки</span>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
