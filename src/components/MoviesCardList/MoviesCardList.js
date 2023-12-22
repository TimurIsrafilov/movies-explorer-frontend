import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard.js";
import PopupForm from "../PopupForm/PopupForm.js";

function MoviesCardList() {
  return (
    <section className="moviescardlist">
      <div className="moviescardlist__container">
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
      <div className="moviescardlist__add-container">
        <button className="moviescardlist__add">Ещё</button>
      </div>
      {/* <PopupForm /> */}
    </section>
  );
}

export default MoviesCardList;
