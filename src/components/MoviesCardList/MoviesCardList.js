import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList(props) {
  return (
    <section className="moviescardlist">
      <div className="moviescardlist__container">
        {props.moviesForAdd
          ? props.moviesForAdd.map((movie) => (
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
              />
            ))
          : ""}
      </div>

      <div
        className={`${
          props.searchedMovies.length !== 0
            ? "moviescardlist__add-container"
            : ""
        }`}
      >
        {props.searchedMovies.length !== 0 ? (
          <button
            type="button"
            className="moviescardlist__add"
            aria-label="Ещё"
            onClick={props.onClick}
          >
            Ещё
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
