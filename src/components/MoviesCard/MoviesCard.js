import React from "react";

import {
  BASIC_URL,
  BASIC_HTTP_URL,
  BASIC_HTTPS_URL,
  BEATFILMSERVER_URL,
} from "../../utils/Constants";

function MoviesCard(props) {
  const handleMovieClick = (e) => {
    e.preventDefault();
    window.location.href = `${props.trailerLink}`;
  };

  const handleMovieAdd = () => {
    props.onMovieAdd(props.movie);
  };

  const handleSavedMovieDelete = () => {
    props.onSavedMovieDelete(props.movie);
  };

  const handleMovieDelete = () => {
    const movie = props.savedMovies.find(
      (item) => item.movieId === props.movie.id
    );
    props.onSavedMovieDelete(movie);
  };

  function digitToTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration - hours * 60);
    const time =
      duration / 60 >= 1 ? hours + "ч " + minutes + "м" : minutes + "м";

    return time;
  }

  const moviesPage =
    window.location.href === `${BASIC_URL}/movies` ||
    window.location.href === `${BASIC_HTTP_URL}/movies` ||
    window.location.href === `${BASIC_HTTPS_URL}/movies`;

  const isLiked =
    moviesPage &&
    props.savedMovies.find((item) => item.movieId === props.movie.id);

  const movieLikeButtonClassName = `moviescard__add ${
    isLiked && "moviescard__add_active"
  }`;

  return (
    <div className="moviescard">
      <img
        src={
          props.imageurl
            ? `${BEATFILMSERVER_URL}${props.imageurl}`
            : props.image
        }
        alt={props.nameRU}
        className="moviescard__photo"
        onClick={handleMovieClick}
      />
      <div className="moviescard__container">
        <div className="moviescard__title-container">
          <h2 className="moviescard__title">{props.nameRU}</h2>
          <h2 className="moviescard__duration">
            {digitToTime(props.duration)}
          </h2>
        </div>
        <div className="moviescard__button">
          {moviesPage ? (
            <button
              type="button"
              className={movieLikeButtonClassName}
              aria-label="добавить фильм"
              onClick={isLiked ? handleMovieDelete : handleMovieAdd}
            ></button>
          ) : (
            <button
              type="button"
              className="moviescard__delete"
              aria-label="удалить фильм"
              onClick={handleSavedMovieDelete}
            ></button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
