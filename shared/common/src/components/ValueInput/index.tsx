'use client'

import { XIcon } from '@bitgouel/common'
import { ValueInputProps } from '@bitgouel/types'
import { Ref, forwardRef, useEffect, useState } from 'react'
import * as S from './style'

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
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => setFocus(false)}
      >
        <S.ValueInput
          ref={ref}
          {...rest}
          isError={!!errorText}
          isLoading={isLoading}
        />
        {length > 0 && focus && onClear && (
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
