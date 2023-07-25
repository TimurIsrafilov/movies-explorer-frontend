import React from "react";

import { Link } from "react-router-dom";

function Result(props) {
  return (
    <section className="result">
      <div className="result__container">
        <h2 className="result__error-number">{props.error.status}</h2>
        <p className="result__error-description">{props.error.statusText}</p>
        <Link to="/" className="result__back">
          Назад
        </Link>
      </div>
    </section>
  );
}

export default Result;
