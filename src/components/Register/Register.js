import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <div className="register__header-container">
        <Link to="/" className="register__logo">
          <img alt="Лого" src={logo} />
        </Link>

        <h3 className="register__title">Добро пожаловать!</h3>
      </div>

      <form className="register__form" name={"registerForm"}>
        <div className="register__inputs-container">
          <span className="register__field-name">Имя</span>
          <input
            id="name-input"
            type="text"
            placeholder="Имя"
            name="name"
            required
            className="register__input register__input_type_name"
          />
          <span className="register__input-error name-input-error">
            Что-то пошло не так...
          </span>
          <span className="register__field-name">E-mail</span>
          <input
            id="email-input"
            type="email"
            placeholder="E-mail"
            name="email"
            required
            className="register__input register__input_type_email"
          />
          <span className="register__input-error email-input-error">
            Что-то пошло не так...
          </span>
          <span className="register__field-name">Пароль</span>
          <input
            id="password-input"
            type="password"
            placeholder="Пароль"
            name="password"
            required
            className="register__input register__input_type_password"
          />
          <span className="register__input-error password-input-error">
            Что-то пошло не так...
          </span>
        </div>
        <button
          type="submit"
          className="register__submit-button"
          aria-label="Да"
        >
          Зарегистрироваться
        </button>
      </form>

      <div className="register__note-container">
        <p className="register__note">{"Уже зарегистрированы?"}</p>
        <Link to="/signin" className="register__link">
          {"Войти"}
        </Link>
      </div>
    </section>
  );
}

export default Register;
