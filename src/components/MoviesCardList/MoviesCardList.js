import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard.js";
import PopupForm from "../PopupForm/PopupForm.js";

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className="movies-card-list__add-container">
        <button className="movies-card-list__add">Ещё</button>
      </div>
      <PopupForm />
    </div>
  );
}

export default MoviesCardList;
