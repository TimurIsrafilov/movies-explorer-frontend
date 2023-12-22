import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__title-container">
          <h3 className="portfolio__title">Портфолио</h3>{" "}
        </div>
        <ul className="portfolio__items-container">
          <li className="portfolio__item-container">
            <a
              className="portfolio__item-link"
              target="_blank"
              href="https://timurisrafilov.github.io/how-to-learn"
            >
              <h3 className="portfolio__item">Статичный сайт</h3>
              <div className="portfolio__arrow"></div>
            </a>
          </li>
          <li className="portfolio__item-container">
            <a
              className="portfolio__item-link"
              target="_blank"
              href="https://timurisrafilov.github.io/russian-travel/index.html"
            >
              <h3 className="portfolio__item">Адаптивный сайт</h3>
              <div className="portfolio__arrow"></div>
            </a>
          </li>
          <li className="portfolio__item-container">
            <a
              className="portfolio__item-link"
              target="_blank"
              href="https://timurisrafilov.github.io/mesto/"
            >
              <h3 className="portfolio__item">Одностраничное приложение</h3>
              <div className="portfolio__arrow"></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
