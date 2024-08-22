import React from "react";
import { useState } from "react";
import * as S from "./styles";

function OptionSelect({ classNamePrefix, options, value, label, onChange,onBlur,className}) {
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
    { value: "Ectomorfo", label: "Ectomorfo" },
    { value: "Mesomorfo", label: "Mesomorfo" },
    { value: "Endomorfo", label: "Endomorfo" },

  ]

  const selectedoptions = options === "position" ? localOptionsPosition : localOptionsBiotype

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
        options={selectedoptions}
        value={selectOptions}
        onChange={handleChangeSelect}
        onBlur={onBlur}
        className={className}
      />
      {className === "invalid" ? 
      (<span style={{ color: "red", fontSize: "12px" }}>
                Campo obrigatório
        </span>) : ""

      }
    </S.ContainerControlSelect>
  );
}

export default OptionSelect;
