import React from "react";

import card_example from "../../images/card_example.svg";

function MoviesCard() {
  return (
    <section className="movies-card__element">
      <img src={card_example} alt="Карта" className="movies-card__photo" />
      <div className="movies-card__container">
        <div className="movies-card__title-container">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <h2 className="movies-card__duration">1м42м</h2>
        </div>
        <button
          type="button"
          className="movies-card__like"
          aria-label="поставить нравиться"
        ></button>
      </div>
    </section>
  );
}

export default MoviesCard;
