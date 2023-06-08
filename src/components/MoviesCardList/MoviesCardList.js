import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard.js";
import PopupForm from "../PopupForm/PopupForm.js";

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
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
      </ul>
      <div className="movies-card-list__add-container">
        <button className="movies-card-list__add">Ещё</button>
      </div>
      {/* <PopupForm /> */}
    </section>
  );
}

export default MoviesCardList;
