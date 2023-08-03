import { useState } from "react";

import {
  VALID_ERR_NAME,
  VALID_ERR_EMAIL,
  VALID_ERR_PASS,
} from "./Constants";

export function Validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    if (name === "name") {
      const validName = value.match(/^[а-яА-ЯёЁa-zA-Z0-9\-\s]+$/i);
      setErrors({ ...errors, [name]: validName ? "" : VALID_ERR_NAME });
    }
    if (name === "email") {
      const validEmail = value.match(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      );
      setErrors({ ...errors, [name]: validEmail ? "" : VALID_ERR_EMAIL });
    }
    if (name === "password") {
      const validPassword = value.length >= 1;
      setErrors({
        ...errors,
        [name]: validPassword ? "" : VALID_ERR_PASS,
      });
    }
    // if (name === "searchinput") {
    //   const validSearch = value.length >= 1;
    //   setErrors({
    //     ...errors,
    //     [name]: validSearch ? "" : " Нужно ввести ключевое слово",
    //   });
    // }

    setIsValid(e.target.closest("form").checkValidity());
  };

  // const resetForm = useCallback(
  //   (newValues = {}, newErrors = {}, newIsValid = false) => {
  //     setValues(newValues);
  //     setErrors(newErrors);
  //     setIsValid(newIsValid);
  //   },
  //   [setValues, setErrors, setIsValid]
  // );

  return {
    handleChange,
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    // resetForm,
  };
}
