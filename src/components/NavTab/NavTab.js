import React from "react";

import { HashLink as Link } from 'react-router-hash-link';

function NavTab(props) {
  return (
    <section className="navtab">
      <ul className="navtab-container">
        <Link to={props.aboutproject} className="navtab-item">
        О проекте
        </Link>
        <Link to={props.techs} className="navtab-item">
        Технологии
        </Link>
        <Link to={props.aboutme} className="navtab-item">
        Студент
        </Link>
      </ul>
    </section>
  );
}

export default NavTab;
