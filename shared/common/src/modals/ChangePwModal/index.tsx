'use client'

import { ChangeEvent, FocusEvent, useEffect, useState } from 'react'
import { ValueInput, useModal, Portal } from '@bitgouel/common'
import * as S from './style'
import { usePatchPassword } from '@bitgouel/api'
import { toast } from 'react-toastify'

const MAXLENGTH: number = 24 as const

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
    if (error?.response?.status === 401)
      toast.error('기존 비밀번호가 일치하지 않습니다')
  }, [error])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'currentPw') {
      setCurrentPw(value)
    } else if (name === 'newPw') {
      setNewPw(value)
    } else if (name === 'newConfirmPw') {
      setNewConfirmPw(value)
    }
  }

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const passwordRegex = new RegExp(
      /^(?=.[A-Za-z0-9])[A-Za-z0-9!@#\$%^&]{8,24}$/
    )
    const { name, value } = e.target

    if (name === 'currentPw') {
      if (value === '') {
        setCurrentErrorMessage('')
      } else if (!passwordRegex.test(value)) {
        setCurrentErrorMessage('잘못된 비밀번호입니다.')
      } else {
        setCurrentErrorMessage('')
      }
    } else if (name === 'newPw') {
      if (value === '') {
        setNewErrorMessage('')
      } else if (currentPw === value) {
        setNewErrorMessage('새로운 비밀번호를 입력해주세요.')
      } else if (!passwordRegex.test(value)) {
        setNewErrorMessage('잘못된 비밀번호입니다.')
      } else {
        setNewErrorMessage('')
      }
    } else if (name === 'newConfirmPw') {
      if (value === '') {
        setNewConfirmErrorMessage('')
      } else if (!passwordRegex.test(value)) {
        setNewConfirmErrorMessage('잘못된 비밀번호입니다.')
      } else if (newPw !== value) {
        setNewConfirmErrorMessage('비밀번호가 일치하지 않습니다.')
      } else if (currentPw === value) {
        setNewErrorMessage('새로운 비밀번호를 입력해주세요.')
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
            maxLength={MAXLENGTH}
            isPassword={true}
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
            maxLength={MAXLENGTH}
            isPassword={true}
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
            maxLength={MAXLENGTH}
            isPassword={true}
          />
        </S.InputsContainer>
        <S.ChangePwButtonContainer>
          <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
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
