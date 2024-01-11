import React from "react";

import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import PopupForm from "../PopupForm/PopupForm.js";
import Preloader from "../Preloader/Preloader.js";
import SearchForm from "../SearchForm/SearchForm.js";

function Movies(props) {
  return (
    <div className="main">
      <Header loggedIn={props.loggedIn} onOpen={props.onOpen} />
      <SearchForm
        onMoviesShort={props.onMoviesShort}
        onMoviesAll={props.onMoviesAll}
        searchValue={props.searchValue}
        onSearchValue={props.onSearchValue}
        isShort={props.isShort}
      />
      <Preloader
        preloader={props.preloader}
        loaderError={props.loaderError}
        preloaderError={props.preloaderError}
      />
      <MoviesCardList
        searchedMovies={props.searchedMovies}
        savedMovies={props.savedMovies}
        onMovieAdd={props.onMovieAdd}
        onSavedMovieDelete={props.onSavedMovieDelete}
        moviesForAdd={props.moviesForAdd}
        onClick={props.onClick}
      />
      <Footer />
      <PopupForm onClose={props.onClose} isOpen={props.isOpen} />
    </div>
  );
}

export default Movies;
