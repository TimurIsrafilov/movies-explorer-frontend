import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import { Validation } from "../../utils/Validation";

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = Validation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      return;
    }
    props.handleLogin(values);
    // resetForm({ email: "", password: "" });
  };

  return (
    <section className="login">
      <div className="login__header-container">
        <Link to="/" className="login__logo">
          <img alt="Лого" src={logo} />
        </Link>
        <h3 className="login__title">Рады видеть!</h3>
      </div>

      <form className="login__form" name={"loginForm"} onSubmit={handleSubmit}>
        <div className="login__inputs-container">
          <span className="login__field-name">E-mail</span>
          <input
            id="email-input"
            type="email"
            placeholder="E-mail"
            name="email"
            required
            className="login__input login__input_type_email"
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="login__input-error email-input-error">
            {errors.email}
          </span>
          <span className="login__field-name">Пароль</span>
          <input
            id="password-input"
            type="password"
            placeholder="Пароль"
            name="password"
            required
            className="login__input login__input_type_password"
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="login__input-error password-input-error">
            {errors.password}
          </span>
        </div>
        <button
          type="submit"
          className={`login__submit-button ${
            isValid ? "" : "login__submit-button_disabled"
          }`}
          aria-label="Да"
          disabled={`${isValid ? "" : "disabled"}`}
        >
          Войти
        </button>
      </form>

      <div className="login__note-container">
        <p className="login__note">{"Ещё не зарегистрированы?"}</p>
        <Link to="/signup" className="login__link">
          {"Регистрация"}
        </Link>
      </div>
    </section>
  );
}

export default Login;
