import React from "react";
import { useState } from "react";
import * as S from "./styles";

function OptionSelect({ classNamePrefix, options, value, label, onChange}) {
  const [selectOptions, setSelectOptions] = useState(value);
  const localOptions = [
    { value: "nao informa", label: "não informa" },
    { value: "punho", label: "Punho D" },
    { value: "punho", label: "Punho E" },
    { value: "mao", label: "Mão D" },
    { value: "mao", label: "Mão E" },
    { value: "ombro", label: "Ombro" },
  ];
  const handleChangeSelect = (option) => {
    setSelectOptions(option);
    if(onChange) {
      onChange(option);
    }
  };
  return (
    <S.ContainerControlSelect>
    {label && <label className="Select__label">{label}</label>}
      <S.ContainerSelect
        classNamePrefix={classNamePrefix}
        options={localOptions}
        value={selectOptions}
        onChange={handleChangeSelect}
      />
    </S.ContainerControlSelect>
  );
}

export default OptionSelect;
