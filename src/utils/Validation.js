import { useState, useCallback } from "react";

import {
  VALID_ERR_NAME,
  VALID_ERR_EMAIL,
  VALID_ERR_PASS,
  REG_EX_EMAIL_CHECK,
  REG_EX_NAME_CHECK,
} from "./Constants";

export function Validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });

    if (name === "name") {
      const validName = value.match(REG_EX_NAME_CHECK);
      setErrors({ ...errors, [name]: validName ? "" : VALID_ERR_NAME });
    }
    if (name === "email") {
      const validEmail = value.match(REG_EX_EMAIL_CHECK);
      setErrors({ ...errors, [name]: validEmail ? "" : VALID_ERR_EMAIL });
    }
    if (name === "password") {
      const validPassword = value.length >= 1;
      setErrors({
        ...errors,
        [name]: validPassword ? "" : VALID_ERR_PASS,
      });
    }

    const isValid = e.target.closest("form").checkValidity();
    let isEmailValid = true;
    const emailInput = e.target
      .closest("form")
      .querySelector('input[name="email"]');
    if (emailInput) {
      isEmailValid = REG_EX_EMAIL_CHECK.test(emailInput.value);
    }

    setIsValid(isValid && isEmailValid);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    handleChange,
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm,
  };
}
