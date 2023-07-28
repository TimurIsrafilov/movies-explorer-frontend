import React, { useState, useEffect } from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

import MoviesCard from "../MoviesCard/MoviesCard.js";
import PopupForm from "../PopupForm/PopupForm.js";

import Movies from "../Movies/Movies.js";

function MoviesCardList(props) {
  // const searchedMovies = JSON.parse(localStorage.getItem("searchedMovies"));






  return (
    <section className="moviescardlist">
      <div className="moviescardlist__container">
        {/* {props.searchedMovies */}
        {props.moviesForAdd
          ? props.moviesForAdd.map((movie) => (
              //  {props.movies.map((movie) => (
              <MoviesCard
                savedMovies={props.savedMovies}
                movie={movie}
                nameRU={movie.nameRU}
                duration={movie.duration}
                imageurl={movie.image.url}
                trailerLink={movie.trailerLink}
                id={movie.id}
                key={movie.id}
                onMovieAdd={props.onMovieAdd}
                onSavedMovieDelete={props.onSavedMovieDelete}
                // onCardClick={props.onCardClick}
                // onCardLike={props.onCardLike}
                // onCardDelete={props.onCardDelete}
                // savedMovieId={movie.movieId}
              />
            ))
          : ""}
      </div>
      <div className="moviescardlist__add-container">
        <button
          type="button"
          // className="moviescardlist__add"
          className={`moviescardlist__add ${
            props.searchedMovies.length !== 0 ? "" : "moviescardlist__add_disabled"
          }`}
          aria-label="Ещё"
          disabled={`${props.searchedMovies.length !== 0  ? "" : "disabled"}`}
          onClick={props.onClick}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
