'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { ValueInput } from '../../../../components'
import { usePatchPassword } from '@bitgouel/api'
import { toast } from 'react-toastify'
import { match } from 'ts-pattern'

const NewPassword = ({}: {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { push } = useRouter()
  const [currentPw] = useState<string>('')
  const [newPw, setNewPw] = useState<string>('')
  const [newErrorMessage, setNewErrorMessage] = useState<string>('')
  const [newConfirmPw, setNewConfirmPw] = useState<string>('')
  const [newConfirmErrorMessage, setNewConfirmErrorMessage] =
    useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailStatus, setEmailStatus] = useState<boolean>(false)
  const [emailValue, setEmailValue] = useState<string>('')
  const [emailErrorText, setEmailErrorText] = useState<string>('')
  const { error } = usePatchPassword()

  useEffect(() => {
    if (error?.response?.status === 401)
      toast.error('기존 비밀번호가 일치하지 않습니다')
  }, [error])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    if (e.target.name === 'newPw') {
      setNewPw(e.target.value)
      if (e.target.value === '') {
        setNewErrorMessage('')
      } else if (currentPw === e.target.value) {
        setNewErrorMessage('새로운 비밀번호를 입력해주세요.')
      } else if (!emailRegex.test(e.target.value)) {
        setNewErrorMessage('잘못된 비밀번호입니다.')
      } else {
        setNewErrorMessage('')
      }
    } else {
      setNewConfirmPw(e.target.value)
      if (e.target.value === '') {
        setNewConfirmErrorMessage('')
      } else if (!emailRegex.test(e.target.value)) {
        setNewConfirmErrorMessage('잘못된 비밀번호입니다.')
      } else if (newPw !== e.target.value) {
        setNewConfirmErrorMessage('비밀번호가 일치하지 않습니다.')
      } else {
        setNewConfirmErrorMessage('')
      }
    }
  }
  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    setEmailValue(e.target.value)
    if (e.target.value === '') {
      setEmailErrorText('')
    } else if (!emailRegex.test(e.target.value)) {
      setEmailErrorText('잘못된 이메일입니다.')
    } else {
      setEmailErrorText('')
    }
  }

  const checkSMS = () => {
    if (emailValue) {
      toast.success('인증번호를 발송했습니다')
    } else {
    }
  }

  return (
    <>
      <div>
        <S.NumberBox>
          <S.FirstNumberInput>
            <ValueInput
              type='text'
              placeholder='이메일'
              name='newPw'
              length={newPw.length}
              onChange={checkEmail}
              onClear={() => setEmail('')}
              errorText={emailErrorText}
            />
          </S.FirstNumberInput>
          <S.FinishButton numStatus={emailStatus} onClick={checkSMS}>
            인증
          </S.FinishButton>
        </S.NumberBox>
        <S.PasswordInputContainer>
          <ValueInput
            type='password'
            placeholder='새 비밀번호'
            name='newPw'
            value={newPw}
            onChange={onChange}
            length={newPw.length}
            onClear={() => setNewPw('')}
            errorText={newErrorMessage}
          />
          <ValueInput
            type='password'
            placeholder='새 비밀번호 확인'
            name='newConfirmPw'
            value={newConfirmPw}
            onChange={onChange}
            length={newConfirmPw.length}
            onClear={() => setNewConfirmPw('')}
            errorText={newConfirmErrorMessage}
          />
        </S.PasswordInputContainer>
      </div>
      <S.ButtonContainer>
        <S.PreButton onClick={() => push('/main/my')}>이전으로</S.PreButton>
        <S.NextButton>다음으로</S.NextButton>
      </S.ButtonContainer>
    </>
  )
}

export default NewPassword
