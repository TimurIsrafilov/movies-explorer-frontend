import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__title-container">
          <h3 className="portfolio__title">Портфолио</h3>{" "}
        </div>
        <div className="portfolio__item-container">
          <h3 className="portfolio__item">Статичный сайт</h3>
          <div className="portfolio__arrow"></div>
        </div>
        <div className="portfolio__item-container">
          <h3 className="portfolio__item">Адаптивный сайт</h3>
          <div className="portfolio__arrow"></div>
        </div>
        <div className="portfolio__item-container">
          <h3 className="portfolio__item">Одностраничное приложение</h3>
          <div className="portfolio__arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
