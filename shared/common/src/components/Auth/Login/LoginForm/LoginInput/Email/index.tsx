'use client'

import { EmailErrorText, EmailValue, ValueInput } from '@bitgouel/common'
import { ChangeEvent, FocusEvent } from 'react'
import { useRecoilState } from 'recoil'
import { match } from 'ts-pattern'

interface Props {
  isLoading: boolean
}

const Email = ({ isLoading }: Props) => {
  const [emailValue, setEmailValue] = useRecoilState(EmailValue)
  const [emailErrorText, setEmailErrorText] = useRecoilState(EmailErrorText)

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value)
  }

  const onEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

    match(e.target.value.length)
      .with(0, () => setEmailErrorText(''))
      .otherwise(() =>
        match(!emailRegex.test(e.target.value))
          .with(true, () => setEmailErrorText('잘못된 이메일입니다.'))
          .otherwise(() => setEmailErrorText(''))
      )
  }

  return (
    <ValueInput
      type='text'
      value={emailValue}
      onChange={onEmailChange}
      onBlur={onEmailBlur}
      placeholder='이메일'
      onClear={() => setEmailValue('')}
      length={emailValue.length}
      errorText={emailErrorText}
      isLoading={isLoading}
    />
  )
}

export default Email
