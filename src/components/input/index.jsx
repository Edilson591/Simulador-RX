import React from "react";
import { useState } from "react";

import * as S from "./styles";

function Input({
  name,
  type,
  value,
  placeholder,
  onChange,
  autoComplete,
  disabled,
  onBlur,
  className,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleButtonVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <S.InputContainer className={className}>
      <input
        value={value}
        onChange={onChange}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onBlur={onBlur}
      />{type === "password" && (
        <S.ToggleButton onClick={toggleButtonVisibility} type="button">
        {showPassword ? "🙈" : "👁️"}
      </S.ToggleButton>)}

    </S.InputContainer>
  );
}

export default Input;
