'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { ValueInput } from '../../../../components'
import { usePatchPassword } from '@bitgouel/api'
import { toast } from 'react-toastify'
import { match } from 'ts-pattern'
import { useSetRecoilState } from 'recoil'
import { PwPage } from '../../../../atoms'

const NewPassword = () => {
  const { push } = useRouter()
  const setPwPage = useSetRecoilState(PwPage)
  const [currentPw] = useState<string>('')
  const [newPw, setNewPw] = useState<string>('')
  const [newErrorMessage, setNewErrorMessage] = useState<string>('')
  const [newConfirmPw, setNewConfirmPw] = useState<string>('')
  const [newConfirmErrorMessage, setNewConfirmErrorMessage] =
    useState<string>('')
  const [passwordStatus, setPasswordStatus] = useState<boolean>(false)
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
        setPasswordStatus(false)
      } else if (currentPw === e.target.value) {
        setNewErrorMessage('새로운 비밀번호를 입력해주세요.')
      } else if (!passwordRegex.test(e.target.value)) {
        setNewErrorMessage('잘못된 비밀번호입니다.')
        setPasswordStatus(false)
      } else {
        setNewErrorMessage('')
        setPasswordStatus(false)
      }
    } else {
      setNewConfirmPw(e.target.value)
      if (e.target.value === '') {
        setNewConfirmErrorMessage('')
        setPasswordStatus(false)
      } else if (!passwordRegex.test(e.target.value)) {
        setNewConfirmErrorMessage('잘못된 비밀번호입니다.')
        setPasswordStatus(false)
      } else if (newPw !== e.target.value) {
        setNewConfirmErrorMessage('비밀번호가 일치하지 않습니다.')
        setPasswordStatus(false)
      } else {
        setNewConfirmErrorMessage('')
        setPasswordStatus(true)
      }
    }
  }

  const nextOnclick = () => {
    toast.success('비밀번호가 변경 되었습니다.')
    setPwPage(4)
  }

  return (
    <>
      <S.NewPasswordContainer>
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
      </S.NewPasswordContainer>
      <S.ButtonContainer>
        <S.PreButton onClick={() => setPwPage(2)}>이전으로</S.PreButton>
        <S.NextButton statusColor={passwordStatus} onClick={nextOnclick}>
          다음으로
        </S.NextButton>
      </S.ButtonContainer>
    </>
  )
}

export default NewPassword
