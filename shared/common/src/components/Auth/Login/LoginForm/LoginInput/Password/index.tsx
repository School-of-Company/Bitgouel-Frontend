'use client'

import {
  PasswordErrorText,
  PasswordValue,
  theme,
  ValueInput,
} from '@bitgouel/common'
import { ChangeEvent, FocusEvent } from 'react'
import { useRecoilState } from 'recoil'
import { match } from 'ts-pattern'

interface Props {
  isLoading: boolean
}

const MAXLENGTH: number = 24 as const

const Password = ({ isLoading }: Props) => {
  const [passwordValue, setPasswordValue] = useRecoilState(PasswordValue)
  const [passwordErrorText, setPasswordErrorText] =
    useRecoilState(PasswordErrorText)

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value)
    match(e.target.value).with('', () => setPasswordErrorText(''))
  }

  const onPasswordBlur = (e: FocusEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.[A-Za-z0-9])[A-Za-z0-9!@#\$%^&]{8,24}$/

    match(e.target.value.length)
      .with(0, () => setPasswordErrorText(''))
      .otherwise(() =>
        match(!passwordRegex.test(e.target.value))
          .with(true, () => setPasswordErrorText('잘못된 비밀번호입니다.'))
          .otherwise(() => setPasswordErrorText(''))
      )
  }

  return (
    <ValueInput
      type='password'
      value={passwordValue}
      onChange={onPasswordChange}
      onBlur={onPasswordBlur}
      placeholder='비밀번호'
      length={passwordValue.length}
      onClear={() => setPasswordValue('')}
      maxLength={MAXLENGTH}
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
