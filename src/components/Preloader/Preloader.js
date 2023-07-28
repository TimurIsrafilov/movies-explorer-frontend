import React from "react";
import "./Preloader.css";

function Preloader(props) {
  return (
    // <section className="preloader">
    // <section className={preloaderClassName}>
    //   <div className="preloader__container">
    //     <span className="preloader__round"></span>
    //   </div>
    // </section>

    <section className="preloader">
      <div className={`${props.preloader ? "preloader__container" : ""}`}>
        <span className={`${props.preloader ? "preloader__round" : ""}`}></span>
        <span className={`${props.preloaderError ? "preloader__error" : ""}`}>
          {`${props.preloaderError ? "Загрузка не удалась" : ""}`}
        </span>
        <span className={`${props.loaderError ? "preloader__error" : ""}`}>
          {`${props.loaderError ? "Ничего не удалась найти" : ""}`}
        </span>
      </div>
    </section>
  );
}

export default Preloader;
