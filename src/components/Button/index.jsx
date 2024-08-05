import React from 'react'
import * as S from './styles'



function Button({Text, onClick, Type = "button" || "submit",className}) {
  return (
    <S.Button type={Type} onClick={onClick} className={className}>
        {Text}
    </S.Button>
  )
}

export default Button;
