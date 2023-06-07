import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

function Login() {
  return (
    <div className="login">
      <div className="login-header__container">
        <Link to="/" className="login__logo">
          <img alt="Лого" src={logo} />
        </Link>
        <h3 className="login__title">Рады видеть!</h3>
      </div>

      <form className="login-form__form" name={"loginForm"}>
        <div className="login-form__inputs-container">
          <span className="login-form__field-name">E-mail</span>
          <input
            id="email-input"
            type="email"
            placeholder="E-mail"
            name="email"
            required
            className="login-form__input login-form__input_type_email"
          />
          <span className="login-form__input-error email-input-error">
            Что-то пошло не так...
          </span>
          <span className="login-form__field-name">Пароль</span>
          <input
            id="password-input"
            type="password"
            placeholder="Пароль"
            name="password"
            required
            className="login-form__input login-form__input_type_password"
          />
          <span className="login-form__input-error password-input-error">
            Что-то пошло не так...
          </span>
        </div>
        <button
          type="submit"
          className="login-form__submit-button"
          aria-label="Да"
        >
          Войти
        </button>
      </form>

      <div className="login-form__note-container">
        <p className="login-form__note">{"Ещё не зарегистрированы?"}</p>
        <Link to="/signup" className="login-form__link">
          {"Регистрация"}
        </Link>
      </div>
    </div>
  );
}

export default Login;
