import React from "react";
import { useState } from "react";
import * as S from "./styles";

function OptionSelect({
  classNamePrefix,
  options,
  value,
  label,
  onChange,
  onBlur,
  className,
}) {
  const [selectOptions, setSelectOptions] = useState(value);
  const localOptionsPosition = [
    { value: "nao informa", label: "não informa" },
    { value: "Punho D", label: "Punho D" },
    { value: "Punho E", label: "Punho E" },
    { value: "Mão D", label: "Mão D" },
    { value: "Mão E", label: "Mão E" },
  ];
  const localOptionsBiotype = [
    { value: "nao informa", label: "não informa" },
    { value: "Magro", label: "Magro" },
    { value: "Normal", label: "Normal" },
    { value: "Obeso", label: "Obeso" },
  ];
  const localOptionsGender = [
    { value: "não informa", label: "não informa"},
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
  ];

  let selectedoptions;

  switch (options) {
    case "position":
      selectedoptions = localOptionsPosition;
      break;

    case "biotype":
      selectedoptions = localOptionsBiotype;
      break;

    default:
      selectedoptions = localOptionsGender;
      break;
  }

  const handleChangeSelect = (option) => {
    setSelectOptions(option);
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <S.ContainerControlSelect>
      {label && <label className="Select__label">{label}</label>}
      <S.ContainerSelect
        classNamePrefix={classNamePrefix}
        options={selectedoptions}
        value={selectOptions}
        onChange={handleChangeSelect}
        onBlur={onBlur}
        className={className}
      />
      {className === "invalid" ? (
        <span style={{ color: "red", fontSize: "12px" }}>
          Campo obrigatório
        </span>
      ) : (
        ""
      )}
    </S.ContainerControlSelect>
  );
}

export default OptionSelect;
