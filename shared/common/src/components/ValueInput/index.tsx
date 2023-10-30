import React, { useState, forwardRef, InputHTMLAttributes } from 'react'
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
  return (
    <S.ValueWrapper>
      <S.ValueInput ref={ref} {...rest} />
      {length > 0 && (
        <S.XIconWrapper onClick={onClear}>
          <XIcon />
        </S.XIconWrapper>
      )}
    </S.ValueWrapper>
  )
}

export default forwardRef(ValueInput)
