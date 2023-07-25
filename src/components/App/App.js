import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import AboutMe from "../AboutMe/AboutMe.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Navigation from "../Navigation/Navigation.js";
import NavTab from "../NavTab/NavTab.js";
import PopupForm from "../PopupForm/PopupForm.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Preloader from "../Preloader/Preloader.js";
import Profile from "../Profile/Profile.js";
import Promo from "../Promo/Promo.js";
import Register from "../Register/Register.js";
import Result from "../Result/Result.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import SearchForm from "../SearchForm/SearchForm.js";
import Techs from "../Techs/Techs.js";

import ProtectedRoute from "../../utils/ProtectedRoute.js";

import "./App.css";

import beatfilmApi from "../../utils/MoviesApi.js";
import mainApi from "../../utils/MainApi.js";

// import cards from "../../utils/cards.js";

import { BEATFILMSERVER_URL } from "../../utils/Constants";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [registeredIn, setRegisteredIn] = useState(false);

  const [beatfilmMovies, setBeatfilmMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [savedSearchValue, setSavedSearchValue] = useState("");
  const [isShortMovies, setIsShortMovies] = useState(false);
  // const [searchedMovies, setSearchedMovies] = useState([]);
  const [savedSearchedMovies, setSavedSearchedMovies] = useState([]);

  const [preloader, setPreloader] = useState(false);
  const [preloaderError, setPreloaderError] = useState(false);

  // стейт ошибки
  const [error, setError] = useState({});

  // обработка ошибки
  const showError = (res) => {
    console.log(`Ошибка.....: ${res.status}, ${res.statusText}`);
    navigate("/error", { replace: true });
    setError(res);
  };

  // обработчик запроса и установки стейта на загрузку фильмов от beatfilm-movies
  function handleSearchValue(searchValue) {
    setPreloader(true);
    beatfilmApi
      .getInitialMovies()
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .then(() => {
        const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
        handleSearcheMovies(localStorageMovies);
        setSearchValue(searchValue.searchinput);
        setPreloader(false);
      })
      .catch((err) =>
        console.log(`Ошибка.....: ${err.status}, ${err.statusText}`),
        setPreloaderError(true)
      );
  }

  // производится сортировка фильмов от beatfilm-movies значением поиска
  function handleSearcheMovies(movies) {
    const searchedMoviesPack = movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) &&
        movie.duration < (isShortMovies ? 40 : 1000)
    );
    localStorage.setItem("searchedMovies", JSON.stringify(searchedMoviesPack));
  }

  // при изменении searchValue перезаписывается localStorage значением поиска
  useEffect(() => {
    if (searchValue) {
      handleSearchValueLocalStorage(searchValue);
    }
  }, [searchValue]);

  function handleSearchValueLocalStorage(searchValue) {
    localStorage.setItem("searchValue", searchValue);
    setSearchValue(searchValue);
  }
  ///

  function handleSavedSearchValue(savedSearchValue) {
    setSavedSearchValue(savedSearchValue.searchinput);
  }

  useEffect(() => {
    // setSavedSearchedMovies(savedMovies);
    handleSavedSearchedMovies(savedMovies);
  }, [savedMovies, savedSearchValue]);
  // }, [ searchValue]);x

  function handleSavedSearchedMovies(savedMovies) {
    if (savedSearchValue === "") {
      setSavedSearchedMovies(savedMovies);
    }
    setSavedSearchedMovies(
      savedMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(savedSearchValue.toLowerCase()) &&
          movie.duration < (isShortMovies ? 40 : 1000)
      )
    );
  }

  // function handleSavedSearchValue(searchValue) {
  //   setSavedSearchValue(searchValue.search);
  // }

  // useEffect(() => {
  //   handleSavedSearchValue(savedMovies);
  // }, [savedSearchValue]);

  // function handleSavedSearchValue(movies) {
  //   const searchedMoviesPack = movies.filter(
  //     (movie) =>
  //       movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) &&
  //       movie.duration < (isShortMovies ? 40 : 1000)
  //   );
  //   setSavedSearchedMovies(searchedMoviesPack);
  // }

  // function handleUpdateUser(user) {
  //   mainApi
  //     .updateUserProfile(user.email, user.name)
  //     .then((res) => {
  //       setCurrentUser(res);
  //     })
  //     .catch((res) => showError(res));
  // }

  // searchedMovies = movies.filter((movie) => {
  //   return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase);
  // });

  function handleSetShortMovies() {
    setIsShortMovies(true);
  }

  function handleSetAllMovies() {
    setIsShortMovies(false);
  }

  // const isLiked = movie.some((i) => i === currentUser._id);

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      // .catch((res) => showError(res));
      .catch((err) =>
        console.log(`Ошибка.....: ${err.status}, ${err.statusText}`)
      );
  }, []);

  const navigate = useNavigate();

  const [popupOpen, setPopupOpen] = useState(true);
  const [onButtonOpen, setOnButtonOpen] = useState(false);

  function handleOpenPopupButton() {
    setPopupOpen(true);
    setOnButtonOpen(true);
  }

  function handleOpenPopup() {
    if (window.innerWidth < 768 && onButtonOpen) {
      setPopupOpen(true);
    }
  }

  function handleClosePopupButton() {
    setPopupOpen(false);
  }

  useEffect(() => {
    handleOpenPopup();
  }, [setPopupOpen]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    mainApi
      .getUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) =>
        console.log(`Ошибка.....: ${err.status}, ${err.statusText}`)
      );
  }, []);

  // useEffect(() => {
  //   Promise.all([mainApi.getUser(), beatfilmApi.getInitialMovies()])
  //     .then(([data, movies]) => {
  //       setCurrentUser(data);
  //       setMovies(movies);
  //     })
  //     .catch((err) => console.log(`Ошибка.....: ${err}`));
  // }, []);

  // const [error, setError] = useState({});

  // const handleSetError(err) {
  // setError(err)
  // }
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  function handleUpdateUser(user) {
    mainApi
      .updateUserProfile(user.email, user.name)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((res) => showError(res));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  function handleMovieAdd(movie) {
    mainApi
      .addNewMovie(
        movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        `${BEATFILMSERVER_URL}${movie.image.url}`,
        movie.trailerLink,
        `${BEATFILMSERVER_URL}${movie.image.formats.thumbnail.url}`,
        movie.owner,
        movie.id,
        movie.nameRU,
        movie.nameEN
      )
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((res) => showError(res));
  }

  function handleSavedMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then((res) => {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((c) => c._id !== movie._id)
        );
      })
      .catch((res) => showError(res));
  }

  const handleLogin = (formValue) => {
    mainApi
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          setUserData(formValue.email, formValue.password);
          navigate("/movies", { replace: true });
        }
      })
      .catch((res) => showError(res));
  };

  const handleRegister = (formValue) => {
    mainApi
      .register(formValue.name, formValue.email, formValue.password)

      .then((res) => {
        handleLogin(formValue);
      })
      .catch((res) => showError(res));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/", { replace: true });
  };

  const handleTokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setUserData(res.email);
          navigate("/", { replace: true });
        })
        .catch((err) =>
          console.log(`Ошибка.....: ${err.status}, ${err.statusText}`)
        );
    }
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Routes>
            <Route
              path="*"
              element={
                loggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <Navigate to="/signup" replace />
                )
              }
            />
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/"
              element={
                <Main
                  loggedIn={loggedIn}
                  onOpen={handleOpenPopupButton}
                  onClose={handleClosePopupButton}
                  isOpen={popupOpen}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Movies}
                  // movies={movies}
                  // searchedMovies={searchedMovies}
                  savedMovies={savedMovies}
                  onMovieAdd={handleMovieAdd}
                  onSavedMovieDelete={handleSavedMovieDelete}
                  onOpen={handleOpenPopupButton}
                  onClose={handleClosePopupButton}
                  isOpen={popupOpen}
                  onMoviesShort={handleSetShortMovies}
                  onMoviesAll={handleSetAllMovies}
                  isShortMovies={isShortMovies}
                  searchValue={searchValue}
                  onSearchValue={handleSearchValue}
                  preloader={preloader}
                  preloaderError={preloaderError}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  savedMovies={savedMovies}
                  onMovieAdd={handleMovieAdd}
                  onSavedMovieDelete={handleSavedMovieDelete}
                  onOpen={handleOpenPopupButton}
                  onClose={handleClosePopupButton}
                  isOpen={popupOpen}
                  onMoviesShort={handleSetShortMovies}
                  onMoviesAll={handleSetAllMovies}
                  isShortMovies={isShortMovies}
                  searchValue={savedSearchValue}
                  onSearchValue={handleSavedSearchValue}
                  savedSearchedMovies={savedSearchedMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Profile}
                  handleLogout={handleLogout}
                  onOpen={handleOpenPopupButton}
                  onClose={handleClosePopupButton}
                  isOpen={popupOpen}
                  onUpdateUser={handleUpdateUser}
                  // isInputChange={isInputChange}
                  // setIsInputChange={setIsInputChange}
                />
              }
            />
            <Route path="/error" element={<Result error={error} />} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
