import React, { useState, forwardRef, InputHTMLAttributes, useState } from 'react'
import * as S from './style'
import { XIcon } from '../../assets'

interface ValueInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear: (e?: any) => void
  length: number
}

const ValueInput = (
  { length, onClear, ...rest }: ValueInputProps,
  ref?: any
) => {
  const [focus, setFocus] = useState<boolean>(true)

  return (
    <S.ValueWrapper
      onMouseOver={() => {
        setFocus(true)
        console.log(focus)
      }}
      onMouseOut={() => {
        setFocus(false)
        console.log(focus)
      }}
    >
      <S.ValueInput ref={ref} {...rest} />
      {length > 0 && focus === true && (
        <S.XIconWrapper onClick={onClear}>
          <XIcon />
        </S.XIconWrapper>
      )}
    </S.ValueWrapper>
  )
}

export default forwardRef(ValueInput)
