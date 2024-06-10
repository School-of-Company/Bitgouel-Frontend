'use client'

import { CanView, NotView, XIcon } from '@bitgouel/common'
import { ValueInputProps } from '@bitgouel/types'
import { Ref, forwardRef, useEffect, useState } from 'react'
import * as S from './style'
import { match } from 'ts-pattern'

const ValueInput = (
  {
    length,
    onClear,
    errorText,
    isLoading,
    isPassword,
    ...rest
  }: ValueInputProps,
  ref?: Ref<HTMLInputElement>
) => {
  const [focus, setFocus] = useState<boolean>(true)
  const [viewSvg, setViewSvg] = useState<boolean>(false)

  match(isPassword).with(
    true,
    () =>
      (rest.type = match(viewSvg)
        .with(true, () => 'text')
        .otherwise(() => 'password'))
  )

  useEffect(() => {
    return () => {
      setFocus(false)
    }
  }, [])

  console.log(viewSvg)

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
        {length > 0 &&
          focus &&
          onClear &&
          (isPassword === true ? (
            <S.IconWrapper
              onClick={() =>
                match(isPassword).with(true, () => setViewSvg(!viewSvg))
              }
            >
              {viewSvg ? <NotView /> : <CanView />}
            </S.IconWrapper>
          ) : (
            <S.IconWrapper onClick={onClear}>
              <XIcon />
            </S.IconWrapper>
          ))}
      </S.ValueWrapper>
      {errorText && <S.ErrorText>{errorText}</S.ErrorText>}
    </>
  )
}

export default forwardRef(ValueInput)
