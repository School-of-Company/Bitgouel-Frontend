'use client'

import { ChangeEvent, useState } from 'react'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { ValueInput } from '@bitgouel/common'
import { usePostEmail } from '@bitgouel/api'
import { EmailProps } from '@bitgouel/types'

const EmailCheck = ({ emailValue, setEmailValue }: EmailProps) => {
  const { push } = useRouter()
  const [emailStatus, setEmailStatus] = useState<boolean>(false)
  const [emailErrorText, setEmailErrorText] = useState<string>('')
  const { mutate } = usePostEmail()

  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setEmailValue(e.target.value)
    if (e.target.value === '') {
      setEmailErrorText('')
      setEmailStatus(false)
    } else if (!emailRegex.test(e.target.value)) {
      setEmailErrorText('잘못된 이메일입니다.')
      setEmailStatus(false)
    } else {
      setEmailErrorText('')
      setEmailStatus(true)
    }
  }

  return (
    <>
      <S.EmailInputContainer>
        <S.EmailBox>
          <S.FirstNumberInput>
            <ValueInput
              type='text'
              value={emailValue}
              placeholder='이메일'
              name='newPw'
              length={emailValue.length}
              onChange={checkEmail}
              onClear={() => setEmailValue('')}
              errorText={emailErrorText}
            />
          </S.FirstNumberInput>
        </S.EmailBox>
      </S.EmailInputContainer>
      <S.ButtonContainer>
        <S.PreButton onClick={() => push('/main/my')}>이전으로</S.PreButton>
        <S.NextButton
          statusColor={emailStatus}
          onClick={() => emailValue && mutate({ email: emailValue })}
        >
          다음으로
        </S.NextButton>
      </S.ButtonContainer>
    </>
  )
}

export default EmailCheck
