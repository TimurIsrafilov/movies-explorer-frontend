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

import beatfilmApi from "../../utils/MoviesApi.js";
import mainApi from "../../utils/MainApi.js";

import {
  BASIC_URL,
  BASIC_HTTP_URL,
  BASIC_HTTPS_URL,
  BEATFILMSERVER_URL,
  SHORT_MOVIE,
  LONG_MOVIE,
  DESKTOP_SCREEN,
  TABLET_SCREEN,
  MOBILE_SCREEN,
  DESKTOP_FIRST_MOVIES_4X4,
  DESKTOP_FIRST_MOVIES_4X3,
  TABLET_FIRST_MOVIES,
  MOBILE_FIRST_MOVIES,
  DESKTOP_NEXT_MOVIES_4,
  DESKTOP_NEXT_MOVIES_3,
  TABLET_NEXT_MOVIES,
  MOBILE_NEXT_MOVIES,
  ERR_PAGE_NOT_FOUND,
  ERR_PAGE_404,
} from "../../utils/Constants";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  // фильмы сохраненные на mainApi
  const [savedMovies, setSavedMovies] = useState([]);

  // установка чекбоксов в нейтральное положение
  const [isShortMovies, setIsShortMovies] = useState(null);
  const [isShortSavedMovies, setIsShortSavedMovies] = useState(null);

  const [savedSearchValue, setSavedSearchValue] = useState("");

  // массив отсортированных фильмов на роут /movie
  const [searchedMovies, setSearchedMovies] = useState([]);

  // массив фильмов для отображения по ширине экрана на роут /movie
  const [moviesForAdd, setMoviesForAdd] = useState([]);

  // массив отсортированных файлов на роут /saved-movie
  const [savedSearchedMovies, setSavedSearchedMovies] = useState([]);

  // стейты работы прелоадера
  const [preloader, setPreloader] = useState(false);
  const [preloaderError, setPreloaderError] = useState(false);
  const [loaderError, setLoaderError] = useState(false);
  // стейт общей ошибки
  const [error, setError] = useState({});
  // стейт количества добавляемых фильмов
  const [movieNumberAdd, setMovieNumberAdd] = useState(0);
  // стейт количества добавляемых фильмов "ЕЩЕ"
  const [nextMovieNumberAdd, setNextMovieNumberAdd] = useState(0);
  // стейт ширины экрана
  const [width, setWidth] = useState(window.innerWidth);
  // стейты попапа
  const [popupOpen, setPopupOpen] = useState(false);
  const [onButtonOpen, setOnButtonOpen] = useState(false);

  const navigate = useNavigate();

  // обработка общей ошибки
  const showError = (res) => {
    console.log(`Ошибка.....: ${res.status}, ${res.statusText}`);
    navigate("/error", { replace: false });
    setError(res);
  };

  // состояние чекбокса короткометражки
  const isShort =
    window.location.href === `${BASIC_URL}/movies` ||
    window.location.href === `${BASIC_HTTP_URL}/movies` ||
    window.location.href === `${BASIC_HTTPS_URL}/movies`
      ? JSON.parse(localStorage.getItem("isShortMovies"))
      : JSON.parse(localStorage.getItem("isShortSavedMovies"));

  // добавляемое число фильмов в зависимости от разрешения экрана
  function handleMovieNumberAdd() {
    if (width >= DESKTOP_SCREEN) {
      setMovieNumberAdd(DESKTOP_FIRST_MOVIES_4X4);
      localStorage.setItem("movieNumberAdd", DESKTOP_FIRST_MOVIES_4X4);
    } else if (
      DESKTOP_SCREEN > window.innerWidth &&
      window.innerWidth >= TABLET_SCREEN
    ) {
      setMovieNumberAdd(DESKTOP_FIRST_MOVIES_4X3);
      localStorage.setItem("movieNumberAdd", DESKTOP_FIRST_MOVIES_4X4);
    } else if (
      TABLET_SCREEN > window.innerWidth &&
      window.innerWidth >= MOBILE_SCREEN
    ) {
      setMovieNumberAdd(TABLET_FIRST_MOVIES);
      localStorage.setItem("movieNumberAdd", TABLET_FIRST_MOVIES);
    } else if (MOBILE_SCREEN > window.innerWidth) {
      setMovieNumberAdd(MOBILE_FIRST_MOVIES);
      localStorage.setItem("movieNumberAdd", MOBILE_FIRST_MOVIES);
    }
  }

  // добавляемое число фильмов "ЕЩЕ" в зависимости от разрешения экрана
  function handleNextMovieNumberAdd() {
    if (width >= DESKTOP_SCREEN) {
      setNextMovieNumberAdd(DESKTOP_NEXT_MOVIES_4);
    } else if (
      DESKTOP_SCREEN > window.innerWidth &&
      window.innerWidth >= TABLET_SCREEN
    ) {
      setNextMovieNumberAdd(DESKTOP_NEXT_MOVIES_3);
    } else if (
      TABLET_SCREEN > window.innerWidth &&
      window.innerWidth >= MOBILE_SCREEN
    ) {
      setNextMovieNumberAdd(TABLET_NEXT_MOVIES);
    } else if (MOBILE_SCREEN > window.innerWidth) {
      setNextMovieNumberAdd(MOBILE_NEXT_MOVIES);
    }
  }

  // обработчик числа фильмов в зависимости от разрешения экрана
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  // слушатель разрешения экрана
  useEffect(() => {
    handleMovieNumberAdd();
    handleNextMovieNumberAdd();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  // обработка короткометражек на роут /movie
  function handleSetShortMovies() {
    setIsShortMovies(true);
    localStorage.setItem("isShortMovies", true);
  }

  function handleSetAllMovies() {
    setIsShortMovies(false);
    localStorage.setItem("isShortMovies", false);
  }

  // обработка короткометражек на роут /saved-movie
  function handleSetSavedShortMovies() {
    setIsShortSavedMovies(true);
    localStorage.setItem("isShortSavedMovies", true);
  }

  function handleSetSavedAllMovies() {
    setIsShortSavedMovies(false);
    localStorage.setItem("isShortSavedMovies", false);
  }

  // отображение сохраненных фильмов роут /movie
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("searchValue")) ||
      JSON.parse(localStorage.getItem("searchedMovies"))
    ) {
      const searchValue = JSON.parse(localStorage.getItem("searchValue"));
      handleSearchValue(searchValue);
      const searchedMovies = JSON.parse(localStorage.getItem("searchedMovies"));

      const movieNumberAdd = localStorage.getItem("movieNumberAdd");

      const searchedMoviesPack = searchedMovies.filter(
        (movie) =>
          movie.nameRU
            .toLowerCase()
            .includes(searchValue.searchinput.toLowerCase()) &&
          movie.duration < (isShort ? SHORT_MOVIE : LONG_MOVIE)
      );
      const firstMoviesSetAdd = searchedMoviesPack.splice(0, movieNumberAdd);

      setMoviesForAdd(firstMoviesSetAdd);
      setSearchedMovies(searchedMoviesPack);
    }
  }, [isShortMovies]);

  // обработчик запроса на загрузку фильмов от beatfilm-movies на роут /movie
  function handleSearchValue(searchValue) {
    const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    if (!localStorageMovies) {
      setPreloader(true);
      setPreloaderError(false);
      setLoaderError(false);
      beatfilmApi
        .getInitialMovies()
        .then((movies) => {
          localStorage.setItem("movies", JSON.stringify(movies));
        })
        .then(() => {
          const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
          handleSearcheMovies(localStorageMovies, searchValue);
          localStorage.setItem("searchValue", JSON.stringify(searchValue));
          setPreloader(false);
        })
        .catch((err) => {
          console.log(`Ошибка.....: ${err.status}, ${err.statusText}`);
          setPreloaderError(true);
          setPreloader(false);
        });
    } else {
      handleSearcheMovies(localStorageMovies, searchValue);
      localStorage.setItem("searchValue", JSON.stringify(searchValue));
    }
  }

  // производится сортировка фильмов от beatfilm-movies значением поиска роут /movie
  function handleSearcheMovies(movies, searchValue) {
    setPreloaderError(false);
    setLoaderError(false);

    const searchedMoviesPack = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchValue.searchinput.toLowerCase())
    );

    if (searchedMoviesPack.length === 0) {
      setLoaderError(true);
    } else {
      localStorage.setItem(
        "searchedMovies",
        JSON.stringify(searchedMoviesPack)
      );
      const searchedWithDurationMoviesPack = searchedMoviesPack.filter(
        (movie) => movie.duration < (isShort ? SHORT_MOVIE : LONG_MOVIE)
      );
      handleMovieNumberAdd();
      const firstMoviesSetAdd = searchedWithDurationMoviesPack.splice(
        0,
        movieNumberAdd
      );

      setSearchedMovies(searchedWithDurationMoviesPack);
      setMoviesForAdd(firstMoviesSetAdd);
    }
  }

  // отображение дополнительных найденых фильмов роут /movie
  function handleMoviesAdd() {
    handleNextMovieNumberAdd();
    const newMoviesSetAdd = searchedMovies.splice(0, nextMovieNumberAdd);
    const newMoviesForAdd = moviesForAdd.concat(newMoviesSetAdd);

    setSearchedMovies(searchedMovies);
    setMoviesForAdd(newMoviesForAdd);
  }

  // отображение сохраненных фильмов роут /saved-movie
  useEffect(() => {
    const savedSearchValue = localStorage.getItem("savedSearchValue");
    if (savedSearchValue || isShort) {
      setSavedSearchedMovies(
        savedMovies.filter(
          (movie) =>
            movie.nameRU
              .toLowerCase()
              .includes(savedSearchValue ? savedSearchValue : "") &&
            movie.duration < (isShort ? SHORT_MOVIE : LONG_MOVIE)
        )
      );
    } else {
      setSavedSearchedMovies(savedMovies);
    }
  }, [savedMovies, isShortSavedMovies]);

  // обработчик запроса на сортировку сохраненных фильмов роут /saved-movie
  function handleSavedSearchValue(searchValue) {
    if (savedSearchValue === "") {
      setSavedSearchedMovies(savedMovies);
    }
    localStorage.setItem("savedSearchValue", searchValue.searchinput);
    setSavedSearchedMovies(
      savedMovies.filter(
        (movie) =>
          movie.nameRU
            .toLowerCase()
            .includes(searchValue.searchinput.toLowerCase()) &&
          movie.duration < (isShort ? SHORT_MOVIE : LONG_MOVIE)
      )
    );
  }

  // обработчик кнопки открытия попапа
  function handleOpenPopupButton() {
    setPopupOpen(true);
    setOnButtonOpen(true);
  }

  // обработчик закрытия попапа
  function handleClosePopupButton() {
    setPopupOpen(false);
  }

  // получение от mainApi сохраненных фильмов
  // получение и установка инфы о пользователе
  useEffect(() => {
    Promise.all([mainApi.getUser(), mainApi.getSavedMovies()])
      .then(([res, savedMovies]) => {
        setCurrentUser(res);
        setSavedMovies(savedMovies);
      })
      .catch((err) =>
        console.log(`Ошибка.....: ${err.status}, ${err.statusText}`)
      );
  }, [loggedIn]);

  // обоработчик обновления инфы о пользователе
  function handleUpdateUser(user) {
    mainApi
      .updateUserProfile(user.email, user.name)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => showError(err));
  }

  // обоработчик добавления понравившегося фильма
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
      .catch((err) => showError(err));
  }

  // обоработчик удаления понравившегося фильма
  function handleSavedMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then((res) => {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((c) => c._id !== movie._id)
        );
      })
      .catch((err) => showError(err));
  }

  // обоработчик регистрации
  const handleRegister = (formValue) => {
    mainApi
      .register(formValue.name, formValue.email, formValue.password)

      .then((res) => {
        handleLogin(formValue);
      })
      .catch((err) => showError(err));
  };

  // обоработчик логина
  const handleLogin = (formValue) => {
    mainApi
      .authorize(formValue.email, formValue.password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          localStorage.setItem("loggedIn", true);
          setCurrentUser(res);
          setSavedMovies(savedMovies);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => showError(err));
  };

  // обоработчик выхода из аккаунта
  const handleLogout = () => {
    localStorage.clear();
    setSavedMovies([]);
    setSavedSearchValue("");
    setSearchedMovies([]);
    setMoviesForAdd([]);
    setSavedSearchedMovies([]);
    setLoggedIn(false);
    setIsShortMovies(null);
    setIsShortSavedMovies(null);
    navigate("/", { replace: true });
  };

  // проверка токена
  const handleTokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          localStorage.setItem("loggedIn", true);
        })
        .catch((err) => {
          console.log(`Ошибка.....: ${err.status}, ${err.statusText}`);
          setLoggedIn(false);
          localStorage.setItem("loggedIn", false);
          navigate("/", { replace: true });
        });
    } else {
      setLoggedIn(false);
      localStorage.setItem("loggedIn", false);
    }
  };

  useEffect(() => {
    handleTokenCheck();
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Routes>
            <Route
              path="*"
              element={
                <Result
                  error={{
                    status: ERR_PAGE_404,
                    statusText: ERR_PAGE_NOT_FOUND,
                  }}
                />
              }
            />

            <Route
              path="/signup"
              element={
                !loggedIn ? (
                  <Register handleRegister={handleRegister} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/signin"
              element={
                !loggedIn ? (
                  <Login handleLogin={handleLogin} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
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
                  searchedMovies={searchedMovies}
                  savedMovies={savedMovies}
                  onMovieAdd={handleMovieAdd}
                  onSavedMovieDelete={handleSavedMovieDelete}
                  onOpen={handleOpenPopupButton}
                  onClose={handleClosePopupButton}
                  isOpen={popupOpen}
                  onMoviesShort={handleSetShortMovies}
                  onMoviesAll={handleSetAllMovies}
                  onSearchValue={handleSearchValue}
                  preloader={preloader}
                  loaderError={loaderError}
                  preloaderError={preloaderError}
                  isShort={isShort}
                  moviesForAdd={moviesForAdd}
                  onClick={handleMoviesAdd}
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
                  onSearchValue={handleSavedSearchValue}
                  savedSearchedMovies={savedSearchedMovies}
                  onMoviesShort={handleSetSavedShortMovies}
                  onMoviesAll={handleSetSavedAllMovies}
                  isShort={isShort}
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
