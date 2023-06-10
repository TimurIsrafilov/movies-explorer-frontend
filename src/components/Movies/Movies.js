import React from "react";

import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Preloader from "../Preloader/Preloader.js";
import SearchForm from "../SearchForm/SearchForm.js";

function Movies() {
  return (
    <div className="main">
      <Header />
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
