import React, {
  useState,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
} from 'react'
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

  useEffect(() => {
    return () => {
      setFocus(false)
    }
  }, [])

  return (
    <S.ValueWrapper
      onMouseOver={() => {
        setFocus(true)
      }}
      onMouseOut={() => {
        setFocus(false)
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
