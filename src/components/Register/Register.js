import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <div className="register-header__container">
        <Link to="/" className="register__logo">
          <img alt="Лого" src={logo} />
        </Link>

        <h3 className="register__title">Добро пожаловать!</h3>
      </div>

      <form className="register-form__form" name={"registerForm"}>
        <div className="register-form__inputs-container">
          <span className="register-form__field-name">Имя</span>
          <input
            id="name-input"
            type="name"
            placeholder="Имя"
            name="name"
            required
            className="register-form__input register-form__input_type_name"
          />
          <span className="register-form__input-error name-input-error">
            Что-то пошло не так...
          </span>
          <span className="register-form__field-name">E-mail</span>
          <input
            id="email-input"
            type="email"
            placeholder="E-mail"
            name="email"
            required
            className="register-form__input register-form__input_type_email"
          />
          <span className="register-form__input-error email-input-error">
            Что-то пошло не так...
          </span>
          <span className="register-form__field-name">Пароль</span>
          <input
            id="password-input"
            type="password"
            placeholder="Пароль"
            name="password"
            required
            className="register-form__input register-form__input_type_password"
          />
          <span className="register-form__input-error password-input-error">
            Что-то пошло не так...
          </span>
        </div>
        <button
          type="submit"
          className="register-form__submit-button"
          aria-label="Да"
        >
          Зарегистрироваться
        </button>
      </form>

      <div className="register-form__note-container">
        <p className="register-form__note">{"Уже зарегистрированы?"}</p>
        <Link to="/signin" className="register-form__link">
          {"Войти"}
        </Link>
      </div>
    </section>
  );
}

export default Register;
