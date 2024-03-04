'use client'

import { useState, forwardRef, useEffect, Ref } from 'react'
import * as S from './style'
import { XIcon } from '../../assets'
import { ValueInputProps } from '@bitgouel/types'

const ValueInput = (
  { length, onClear, errorText, isLoading, ...rest }: ValueInputProps,
  ref?: Ref<HTMLInputElement>
) => {
  const [focus, setFocus] = useState<boolean>(true)

  useEffect(() => {
    return () => {
      setFocus(false)
    }
  }, [])

  return (
    <>
      <S.ValueWrapper
        onMouseOver={() => {
          setFocus(true)
        }}
        onMouseOut={() => {
          setFocus(false)
        }}
      >
        <S.ValueInput
          ref={ref}
          {...rest}
          isError={errorText ? true : false}
          isLoading={isLoading}
        />
        {length > 0 && focus === true && onClear && (
          <S.XIconWrapper onClick={onClear}>
            <XIcon />
          </S.XIconWrapper>
        )}
      </S.ValueWrapper>
      {errorText && <S.ErrorText>{errorText}</S.ErrorText>}
    </>
  )
}

export default forwardRef(ValueInput)
