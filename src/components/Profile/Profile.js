import React from "react";
import { useEffect, useState } from "react";

import Header from "../Header/Header.js";
import PopupForm from "../PopupForm/PopupForm.js";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Validation } from "../../utils/Validation";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const { handleChange, values, setValues, errors, isValid } = Validation();

  const [isInputChange, setIsInputChange] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: values.name,
      email: values.email,
    });
    setIsInputChange(!isInputChange);
  }

  const isChanged =
    values.name !== currentUser.name || values.email !== currentUser.email;

  useEffect(() => {
    setValues({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  function signOut() {
    props.handleLogout();
  }

  const profileChangeNoteClassName = `${
    isInputChange ? "profile-form__confirm-note" : ""
  }`;

  return (
    <div className="profile">
      <Header loggedIn={props.loggedIn} onOpen={props.onOpen} />
      <div className="profile__container">
        <h2 className="profile__title">Привет!</h2>

        <form
          className="profile-form__form"
          name={"profileForm"}
          onSubmit={handleSubmit}
        >
          <div className="profile-form__inputs-container">
            <span className="profile-form__input-error name-input-error">
              {errors.name}
            </span>
            <div className="profile-form__input-container">
              <span className="profile-form__field-name">Имя</span>
              <input
                id="profile-name-input"
                type="text"
                placeholder="Имя"
                name="name"
                required
                className="profile-form__input profile-form__input_type_name"
                value={values.name || ""}
                onChange={handleChange}
                readOnly={isInputChange}
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
                value={values.email || ""}
                onChange={handleChange}
                readOnly={isInputChange}
              />
            </div>
            <span className="profile-form__input-error email-input-error">
              {errors.email}
            </span>
          </div>
          <span className={profileChangeNoteClassName}>
            {isInputChange ? "Профиль успешно обновлен!" : ""}
          </span>
          <button
            type="submit"
            className={`profile-form__submit-button ${
              isValid && isChanged
                ? ""
                : "profile-form__submit-button_disabled"
            }`}
            aria-label="Редактировать"
            disabled={`${isValid && isChanged ? "" : "disabled"}`}
          >
            Редактировать
          </button>
        </form>

        <button
          type="button"
          className="profile__exit"
          aria-label="Выйти"
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </div>
      <PopupForm onClose={props.onClose} isOpen={props.isOpen} />
    </div>
  );
}

export default Profile;
