import React from 'react'

import * as S from './styles'

function Input({name, type, value, placeholder, onChange,autoComplete}) {
  return (
    <S.InputContainer>
    <input 
    value={value}
    onChange={onChange}
    type={type}
    name={name}
    placeholder={placeholder}
    autoComplete={autoComplete}
     />
    </S.InputContainer>
  )
}



export default Input