import React from "react";

import { useEffect, useState } from "react";

import search_icon from "../../images/search_icon.svg";

import { Validation } from "../../utils/Validation";

import { BASIC_URL } from "../../utils/Constants";

function SearchForm(props) {
  const {
    handleChange,
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm,
  } = Validation();



  const buttonTumblerClassName = `search-form__button-tumbler ${
    props.isShort && "search-form__button-tumbler_active"
  }`;

  const searchFormButtonClassName = `search-form__button ${
    props.isShort && "search-form__button_active"
  }`;

  const handleSetShortMovies = () => {
    props.onMoviesShort();
  };

  const handleSetAllMovies = () => {
    props.onMoviesAll();
  };

  function handleSubmit(e) {
    e.preventDefault();

    props.onSearchValue({ searchinput: values.searchinput });
  }

  useEffect(() => {
    setValues({
      ...values,
      searchinput:
        window.location.href == `${BASIC_URL}/movies`
          ? localStorage.getItem("searchValue")
          : localStorage.getItem("savedSearchValue"),
    });
  }, []);

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form
          className="search-form__container-serch"
          name={"searchForm"}
          onSubmit={handleSubmit}
        >
          <div className="search-form__container-input">
            <div className="search-form__logo-loop" title="Лупа"></div>
            <input
              id="search-input"
              type="text"
              placeholder="Фильм"
              name="searchinput"
              required
              className="search-form__input"
              value={values.searchinput || ""}
              onChange={handleChange}
            />
          </div>
          <button className="search-form__search-button">
            <img
              className="search-form__search-icon"
              alt="Поиск"
              src={search_icon}
            />
          </button>
        </form>

        <div className="search-form__container-icon">
          <div className={searchFormButtonClassName}>
            <button
              type="button"
              className={buttonTumblerClassName}
              aria-label="оставить короткометражки"
              onClick={props.isShort ? handleSetAllMovies : handleSetShortMovies}
            ></button>
          </div>
          <span className="search-form__logo-span">Короткометражки</span>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
