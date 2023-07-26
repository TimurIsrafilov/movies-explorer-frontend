import React from "react";

import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Preloader from "../Preloader/Preloader.js";
import SearchForm from "../SearchForm/SearchForm.js";

import PopupForm from "../PopupForm/PopupForm.js";

function Movies(props) {
  return (
    <div className="main">
      <Header loggedIn={props.loggedIn} onOpen={props.onOpen} />
      <SearchForm
        onMoviesShort={props.onMoviesShort}
        onMoviesAll={props.onMoviesAll}
        // isShortMovies={props.isShortMovies}
        searchValue={props.searchValue}
        onSearchValue={props.onSearchValue}

        isShort={props.isShort}

        // tumblerState={props.tumblerState}
      />
      <Preloader
        preloader={props.preloader}
        preloaderError={props.preloaderError}
      />
      <MoviesCardList
        // movies={props.movies}
        searchedMovies={props.searchedMovies}
        savedMovies={props.savedMovies}
        onMovieAdd={props.onMovieAdd}
        // onMovieDelete={props.onMovieDelete}
        onSavedMovieDelete={props.onSavedMovieDelete}
      />
      <Footer />
      <PopupForm onClose={props.onClose} isOpen={props.isOpen} />
    </div>
  );
}

export default Movies;
