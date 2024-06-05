import React from 'react'

import  { InputContainer } from './styles.js'

function Input({name, type, value, placeholder, onChange,autoComplete}) {
  return (
    <InputContainer>
    <input 
    value={value}
    onChange={onChange}
    type={type}
    name={name}
    placeholder={placeholder}
    autoComplete={autoComplete}
     />
    </InputContainer>
  )
}



export default Input