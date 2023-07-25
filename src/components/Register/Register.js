import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import { Validation } from "../../utils/Validation";

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } = Validation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.name || values.email || values.password) {
      props.handleRegister(values);
      resetForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <section className="register">
      <div className="register__header-container">
        <Link to="/" className="register__logo">
          <img alt="Лого" src={logo} />
        </Link>

        <h3 className="register__title">Добро пожаловать!</h3>
      </div>

      <form
        className="register__form"
        name={"registerForm"}
        onSubmit={handleSubmit}
      >
        <div className="register__inputs-container">
          <span className="register__field-name">Имя</span>
          <input
            id="name-input"
            type="text"
            placeholder="Имя"
            name="name"
            required
            className="register__input register__input_type_name"
            value={values.name || ""}
            onChange={handleChange}
          />
          <span className="register__input-error name-input-error">
            {errors.name}
          </span>
          <span className="register__field-name">E-mail</span>
          <input
            id="email-input"
            type="email"
            placeholder="E-mail"
            name="email"
            required
            className="register__input register__input_type_email"
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="register__input-error email-input-error">
            {errors.email}
          </span>
          <span className="register__field-name">Пароль</span>
          <input
            id="password-input"
            type="password"
            placeholder="Пароль"
            name="password"
            required
            className="register__input register__input_type_password"
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="register__input-error password-input-error">
            {errors.password}
          </span>
        </div>
        <button
          type="submit"
          className={`register__submit-button ${
            isValid ? "" : "register__submit-button_disabled"
          }`}
          aria-label="Да"
          disabled={`${isValid ? "" : "disabled"}`}
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
