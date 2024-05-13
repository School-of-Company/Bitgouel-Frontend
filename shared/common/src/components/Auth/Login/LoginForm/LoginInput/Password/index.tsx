'use client'

import {
  PasswordErrorText,
  PasswordValue,
  theme,
  ValueInput,
} from '@bitgouel/common'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

interface Props {
  isLoading: boolean
}

const Password = ({ isLoading }: Props) => {
  const [passwordValue, setPasswordValue] = useRecoilState(PasswordValue)
  const [passwordErrorText, setPasswordErrorText] =
    useRecoilState(PasswordErrorText)

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,24}$/

    setPasswordValue(e.target.value)
    if (e.target.value === '') setPasswordErrorText('')
    else if (!passwordRegex.test(e.target.value))
      setPasswordErrorText('잘못된 비밀번호입니다.')
    else setPasswordErrorText('')
  }
  return (
    <ValueInput
      type='password'
      value={passwordValue}
      onChange={onPasswordChange}
      placeholder='비밀번호'
      length={passwordValue.length}
      onClear={() => setPasswordValue('')}
      style={{
        border: passwordErrorText
          ? `0.0625rem solid ${theme.color.error}`
          : `0.0625rem solid ${theme.color.gray['700']}`,
        color: passwordErrorText
          ? `${theme.color.error}`
          : isLoading
          ? `${theme.color.gray['700']}`
          : `${theme.color.black}`,
      }}
      isLoading={isLoading}
    />
  )
}

export default Password
