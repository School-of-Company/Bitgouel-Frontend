import React from 'react'
import * as S from './style'

interface ValueInputProps {
  placeholder?: string
}

const ValueInput: React.FC<ValueInputProps> = ({ placeholder }) => {
  return <S.ValueInput placeholder={placeholder} />
}

export default ValueInput
