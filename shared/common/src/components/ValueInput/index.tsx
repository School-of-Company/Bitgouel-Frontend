import React, {
  useState,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
} from 'react'
import * as S from './style'
import { XIcon } from '../../assets'

interface ValueInputProps extends InputHTMLAttributes<HTMLInputElement> {
  length: number
  onClear: (e?: any) => void
  errorText?: string
}

const ValueInput = (
  { length, onClear, errorText, ...rest }: ValueInputProps,
  ref?: any
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
        <S.ValueInput ref={ref} {...rest} isError={errorText ? true : false} />
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
