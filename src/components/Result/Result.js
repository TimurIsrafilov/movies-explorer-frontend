import React from "react";

import { useNavigate } from "react-router-dom";

function Result(props) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="result">
      <div className="result__container">
        <h2 className="result__error-number">{props.error.status}</h2>
        <p className="result__error-description">{props.error.statusText}</p>
        <button type="button" className="result__back" onClick={goBack}>
          Назад
        </button>
      </div>
    </section>
  );
}

export default Result;
