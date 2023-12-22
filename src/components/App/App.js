import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

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

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/error" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
