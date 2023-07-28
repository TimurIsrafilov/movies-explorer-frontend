import React from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import PopupForm from "../PopupForm/PopupForm.js";
import SearchForm from "../SearchForm/SearchForm.js";

function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.savedSearchedMovies.find(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="saved-movies">
      <Header loggedIn={props.loggedIn} onOpen={props.onOpen} />
      <SearchForm
        onMoviesShort={props.onMoviesShort}
        onMoviesAll={props.onMoviesAll}
        onSearchValue={props.onSearchValue}
        isShort={props.isShort}
      />
      <div className="saved-movies__container">
        {props.savedSearchedMovies.map(
          (movie) =>
            isOwn && (
              <MoviesCard
                movie={movie}
                nameRU={movie.nameRU}
                duration={movie.duration}
                image={movie.image}
                trailerLink={movie.trailerLink}
                key={movie.movieId}
                onMovieAdd={props.onMovieAdd}
                onSavedMovieDelete={props.onSavedMovieDelete}
              />
            )
        )}
      </div>
      <Footer />
      <PopupForm onClose={props.onClose} isOpen={props.isOpen} />
    </div>
  );
}

export default SavedMovies;
