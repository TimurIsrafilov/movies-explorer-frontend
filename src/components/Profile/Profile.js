import React from "react";

import Header from "../Header/Header.js";

function Profile() {
  return (
    <div className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__title">Привет!</h2>
        <form className="profile-form__form" name={"profileForm"}>
          <div className="profile-form__inputs-container">
            <div className="profile-form__input-container">
              <span className="profile-form__field-name">Имя</span>
              <input
                id="profile-name-input"
                type="text"
                placeholder="Имя"
                name="name"
                required
                className="profile-form__input profile-form__input_type_name"
              />
            </div>
            <div className="profile-form__input-container">
              <span className="profile-form__field-name">E-mail</span>
              <input
                id="profile-email-input"
                type="email"
                placeholder="E-mail"
                name="email"
                required
                className="profile-form__input profile-form__input_type_email"
              />
            </div>
          </div>
          <button
            type="submit"
            className="profile-form__submit-button"
            aria-label="Редактировать"
          >
            Редактировать
          </button>
        </form>
        <p className="profile__exit">Выйти из аккаунта</p>
      </div>
    </div>
  );
}

export default Profile;
