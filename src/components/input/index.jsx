import React from 'react'

import * as S from './styles'

function Input({name, type, value, placeholder, onChange,autoComplete,disabled,onBlur,className}) {
  return (
    <S.InputContainer
    className={className}>
    <input 
    value={value}
    onChange={onChange}
    type={type}
    name={name}
    disabled = {disabled}
    placeholder={placeholder}
    autoComplete={autoComplete}
    onBlur={onBlur}
     />
    </S.InputContainer>
  )
}



export default Input