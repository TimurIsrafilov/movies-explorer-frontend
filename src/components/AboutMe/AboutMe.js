import React from "react";

import profile_photo from "../../images/profile_photo.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__container">
        <div className="about-me__title-container">
          <h2 className="about-me__title">Студент</h2>
        </div>
        <div className="about-me__description-container">
          <div className="about-me__profile-container">
            <h3 className="about-me__description-name">Timur</h3>
            <p className="about-me__description-profession">
              Фронтенд-разработчик, 40 лет
            </p>
            <p className="about-me__description-text">
              Живу в Москве, закончил радио факультет СПБГУТ - инженер. Катаюсь
              на горных лыжах и велосипеде. В 2022 решил заняться
              программированием, выбрал для себя направлнение Веб-разработки.
            </p>
            <p className="about-me__description-link">Github</p>
          </div>
          <img
            className="about-me__description-photo"
            alt="Фото"
            src={profile_photo}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
