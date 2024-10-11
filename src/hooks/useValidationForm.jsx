import { useState } from "react";

export function validateName(namePacient, isDisabled) {
  const [error, setError] = useState("");

  const validateData = () => {
    const trimmedName = namePacient.trim();
    if (trimmedName === "" && !isDisabled) {
      setError("Campo obrigatório");
    } else {
      setError("");
    }
  };
  return {
    setError,
    error,
    validateData,
  };
}

export function isFormValid(
  namePacient,
  isDisabled,
  valueSelectPosition,
  valueSelectBiotype,
  valueSelectGender
) {
  return (
    (isDisabled || namePacient.trim() !== "") &&
    valueSelectPosition.length > 1 &&
    valueSelectBiotype.length > 1 &&
    valueSelectGender.length > 1
  );
}
