'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { ValueInput } from '../../../../components'
import { usePatchPassword } from '@bitgouel/api'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { PwPage } from '../../../../atoms'

const EmailCheck = () => {
  const { push } = useRouter()
  const [emailStatus, setEmailStatus] = useState<boolean>(false)
  const [emailValue, setEmailValue] = useState<string>('')
  const [emailErrorText, setEmailErrorText] = useState<string>('')
  const setPwPage = useSetRecoilState(PwPage)
  const { error } = usePatchPassword()

  useEffect(() => {
    if (error?.response?.status === 401)
      toast.error('기존 비밀번호가 일치하지 않습니다')
  }, [error])

  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
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

  const nextOnclick = () => {
    if (emailValue) {
      toast.success('인증번호를 발송했습니다')
      setPwPage(2)
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
        <S.NextButton statusColor={emailStatus} onClick={nextOnclick}>
          다음으로
        </S.NextButton>
      </S.ButtonContainer>
    </>
  )
}

export default EmailCheck
