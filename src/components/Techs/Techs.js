import React from "react";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <div className="techs__title-container">
          <h2 className="techs__title">Технологии</h2>
        </div>
        <div className="techs__description-container">
          <h3 className="techs__description-title">7 технологий</h3>
          <p className="techs__description-text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__stack-container">
          <li className="techs__stack-item">HTML</li>
          <li className="techs__stack-item">CSS</li>
          <li className="techs__stack-item">JS</li>
          <li className="techs__stack-item">React</li>
          <li className="techs__stack-item">Git</li>
          <li className="techs__stack-item">Exliress.js</li>
          <li className="techs__stack-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
