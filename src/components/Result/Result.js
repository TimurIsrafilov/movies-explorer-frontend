import React from "react";

import { Link } from "react-router-dom";

function Result() {
  return (
    <section className="result">
      <div className="result__container">
        <h2 className="result__error-number">404</h2>
        <p className="result__error-description">Страница не найдена</p>
        <Link to="/" className="result__back">
          Назад
        </Link>
      </div>
    </section>
  );
}

export default Result;
