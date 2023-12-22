import React from "react";

import card_example from "../../images/card_example.svg";

function MoviesCard() {
  return (
    <div className="moviescard">
      <img src={card_example} alt="Карта" className="moviescard__photo" />
      <div className="moviescard__container">
        <div className="moviescard__title-container">
          <h2 className="moviescard__title">33 слова о дизайне</h2>
          <h2 className="moviescard__duration">1м42м</h2>
        </div>
        <button
          type="button"
          className="moviescard__like"
          aria-label="поставить нравиться"
        ></button>
      </div>
    </div>
  );
}

export default MoviesCard;
