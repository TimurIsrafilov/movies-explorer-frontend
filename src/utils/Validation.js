import { useState, useCallback } from "react";

export function Validation() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });

    setIsValid(e.target.closest("form").checkValidity());
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
