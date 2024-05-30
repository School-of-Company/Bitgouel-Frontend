'use client'

import { ChangeEvent, FocusEvent, useEffect, useState } from 'react'
import { ValueInput } from '../../components'
import { useModal } from '../../hooks'
import Portal from '../../portal'
import * as S from './style'
import { usePatchPassword } from '@bitgouel/api'
import { toast } from 'react-toastify'
import { match } from 'ts-pattern'

const ChangePwModal = () => {
  const [currentPw, setCurrentPw] = useState<string>('')
  const [currentErrorMessage, setCurrentErrorMessage] = useState<string>('')
  const [newPw, setNewPw] = useState<string>('')
  const [newErrorMessage, setNewErrorMessage] = useState<string>('')
  const [newConfirmPw, setNewConfirmPw] = useState<string>('')
  const [newConfirmErrorMessage, setNewConfirmErrorMessage] =
    useState<string>('')
  const { closeModal } = useModal()
  const { mutate, error } = usePatchPassword()

  const onChangePw = () => {
    if (
      currentPw !== '' &&
      newPw !== '' &&
      newConfirmPw !== '' &&
      newPw === newConfirmPw &&
      currentPw !== newPw
    )
      mutate({
        currentPassword: currentPw,
        newPassword: newPw,
      })
  }

  useEffect(() => {
    match(error?.response?.status).with(401, () =>
      toast.error('기존 비밀번호가 일치하지 않습니다')
    )
  }, [error])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPw(e.target.value)
  }

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const passwordRegex = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,24}$/
    )

    if (e.target.name === 'currentPw') {
      if (e.target.value === '') {
        setCurrentErrorMessage('')
      } else if (!passwordRegex.test(e.target.value)) {
        setCurrentErrorMessage('잘못된 비밀번호입니다.')
      } else {
        setCurrentErrorMessage('')
      }
    } else if (e.target.name === 'newPw') {
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

  return (
    <Portal onClose={closeModal}>
      <S.ChangePwWrapper>
        <S.TitleItemWrapper>
          <S.TitleItem>비밀번호 변경</S.TitleItem>
          <S.SubTitleItem>비밀번호를 입력해주세요.</S.SubTitleItem>
        </S.TitleItemWrapper>
        <S.InputsContainer>
          <ValueInput
            type='password'
            placeholder='기존 비밀번호'
            name='currentPw'
            value={currentPw}
            onChange={onChange}
            onBlur={onBlur}
            length={currentPw.length}
            onClear={() => setCurrentPw('')}
            errorText={currentErrorMessage}
          />
          <ValueInput
            type='password'
            placeholder='새 비밀번호 (8~24자 이내의 영문 / 숫자, 특수문자 1개 이상)'
            name='newPw'
            value={newPw}
            onChange={onChange}
            onBlur={onBlur}
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
            onBlur={onBlur}
            length={newConfirmPw.length}
            onClear={() => setNewConfirmPw('')}
            errorText={newConfirmErrorMessage}
          />
        </S.InputsContainer>
        <S.ChangePwButtonContainer>
          <S.CancelButton>취소</S.CancelButton>
          <S.CompleteButton
            isAble={
              currentPw !== '' &&
              newPw !== '' &&
              newConfirmPw !== '' &&
              newPw === newConfirmPw &&
              currentPw !== newPw
            }
            onClick={onChangePw}
          >
            확인
          </S.CompleteButton>
        </S.ChangePwButtonContainer>
      </S.ChangePwWrapper>
    </Portal>
  )
}

export default ChangePwModal
