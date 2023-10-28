import React, { forwardRef, InputHTMLAttributes } from 'react'
import * as S from './style'
import { XIcon } from '../../assets'

interface ValueInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear: () => void
  length: number
}

const ValueInput = (
  { length, onClear, ...rest }: ValueInputProps,
  ref?: any
) => {
  return (
    <S.ValueWrapper>
      <S.ValueInput ref={ref} {...rest} />
      <S.XIconWrapper onClick={onClear}>
        {length > 0 && <XIcon />}
      </S.XIconWrapper>
    </S.ValueWrapper>
  )
}

export default forwardRef(ValueInput)
