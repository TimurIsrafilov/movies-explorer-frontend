import React from "react";

import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import PopupForm from "../PopupForm/PopupForm.js";
import SearchForm from "../SearchForm/SearchForm.js";

function SavedMovies() {
  return (
    <div className="saved-movies">
      <Header />
      <SearchForm />
      <div className="saved-movies__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className="saved-movies__add-container">
        {/* <button className="saved-movies__add">Ещё</button> */}
      </div>
      <Footer />
      <PopupForm />
    </div>
  );
}

export default SavedMovies;
