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

    <section className={`${props.preloader ? "preloader" : ""}`}>
      <div className={`${props.preloader ? "preloader__container" : ""}`}>
        <span className={`${props.preloader ? "preloader__round" : ""}`}></span>
        {/* <span className={`${props.preloaderError ? "preloader__error" : ""}`}>Загрузка не удалась</span> */}
      </div>
    </section>
  );
}

export default Preloader;
