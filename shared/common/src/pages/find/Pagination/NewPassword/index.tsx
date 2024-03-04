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
  const [number, setNumber] = useState<string>('')
  const [numStatus, setNumStatus] = useState<boolean>(false)
  const [numberErrorMessage, setNumberErrorMessage] = useState<string>('')
  const [newConfirmPw, setNewConfirmPw] = useState<string>('')
  const [newConfirmErrorMessage, setNewConfirmErrorMessage] =
    useState<string>('')
  const { error } = usePatchPassword()

  useEffect(() => {
    if (error?.response?.status === 401)
      toast.error('기존 비밀번호가 일치하지 않습니다')
  }, [error])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,24}$/
    )
    if (e.target.name === 'newPw') {
      setNewPw(e.target.value)
      if (e.target.value === '') {
        setNewErrorMessage('')
      } else if (currentPw === e.target.value) {
        setNewErrorMessage('새로운 비밀번호를 입력해주세요.')
      } else if (!passwordRegex.test(e.target.value)) {
        setNewErrorMessage('잘못된 비밀번호입니다.')
      } else {
        setNewErrorMessage('')
      }
    } else {
      setNewConfirmPw(e.target.value)
      if (e.target.value === '') {
        setNewConfirmErrorMessage('')
      } else if (!passwordRegex.test(e.target.value)) {
        setNewConfirmErrorMessage('잘못된 비밀번호입니다.')
      } else if (newPw !== e.target.value) {
        setNewConfirmErrorMessage('비밀번호가 일치하지 않습니다.')
      } else {
        setNewConfirmErrorMessage('')
      }
    }
  }

  const checkNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const numberRegex = new RegExp(/^01[0-1]\d{7,8}$/)
    setNumber(e.target.value)
    if (e.target.value === '') {
      setNumberErrorMessage('')
      setNumStatus(false)
    } else if (!numberRegex.test(e.target.value)) {
      setNumberErrorMessage('잘못된 전화번호입니다.')
    } else {
      setNumberErrorMessage('')
      setNumStatus(true)
    }
  }

  const checkSMS = () => {
    if (numStatus) {
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
              type='number'
              placeholder='전화번호 (- 제외)'
              name='newPw'
              length={newPw.length}
              onChange={checkNumber}
              onClear={() => setNumber('')}
              errorText={numberErrorMessage}
            />
          </S.FirstNumberInput>
          <S.FinishButton numStatus={numStatus} onClick={checkSMS}>
            인증
          </S.FinishButton>
        </S.NumberBox>
        <S.PasswordInputContainer>
          <ValueInput
            type='password'
            placeholder='새 비밀번호 (8~24자 이내의 영문 / 숫자, 특수문자 1개 이상)'
            name='newPw'
            value={newPw}
            onChange={onChange}
            length={newPw.length}
            onClear={() => setNewPw('')}
            errorText={newErrorMessage}
          />
          <ValueInput
            type='password'
            placeholder='비밀번호 확인'
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
