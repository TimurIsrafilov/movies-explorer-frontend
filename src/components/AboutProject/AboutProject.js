import React from "react";

function AboutProject() {
  return (
    <div className="about-project">
      <div className="about-project__container">
        <div className="about-project__title-container">
          <h2 className="about-project__title">О проекте</h2>
        </div>
        <div className="about-project__about-container">
          <div className="about-project__description-container">
            <h3 className="about-project__description-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__description-container">
            <h3 className="about-project__description-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__progress-container">
          <p className="about-project__progress-short">1 неделя</p>
          <p className="about-project__progress-long">4 недели</p>
        </div>
        <div className="about-project__progress-container">
          <p className="about-project__stack-short">Back-end</p>
          <p className="about-project__stack-long">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
