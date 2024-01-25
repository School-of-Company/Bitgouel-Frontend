'use client'

import { ChangeEvent, useState } from 'react'
import { ValueInput } from '../../components'
import { useModal } from '../../hooks'
import {
  SubTitleItem,
  TitleItem,
  TitleItemWrapper,
} from '../../pages/signUp/style'
import Portal from '../../portal'
import * as S from './style'

const ChangePwModal = () => {
  const [currentPw, setCurrentPw] = useState<string>('')
  const [confirmPw, setConfirmPw] = useState<string>('')
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.ChangePwContainer>
        <TitleItemWrapper>
          <TitleItem>비밀번호 변경</TitleItem>
          <SubTitleItem>비밀번호를 입력해주세요.</SubTitleItem>
        </TitleItemWrapper>
        <S.InputsContainer>
          <ValueInput
            type='password'
            placeholder='비밀번호 (8~24자 이내의 영문 / 숫자, 특수문자 1개 이상)'
            value={currentPw}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCurrentPw(e.target.value)
            }
            length={currentPw.length}
            onClear={() => setCurrentPw('')}
          />
          <ValueInput
            type='password'
            placeholder='비밀번호 확인'
            value={confirmPw}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPw(e.target.value)
            }
            length={confirmPw.length}
            onClear={() => setConfirmPw('')}
          />
        </S.InputsContainer>
        <S.ChangePwButtonContainer>
          <S.CancelButton>취소</S.CancelButton>
          <S.CompleteButton
            isValid={
              currentPw === confirmPw && currentPw !== '' && confirmPw !== ''
            }
          >
            확인
          </S.CompleteButton>
        </S.ChangePwButtonContainer>
      </S.ChangePwContainer>
    </Portal>
  )
}

export default ChangePwModal
