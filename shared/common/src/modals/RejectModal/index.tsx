'use client'

import { AppropriationModalProps } from '@bitgouel/types'
import { useModal } from '../../hooks'
import Portal from '../../portal'
import { CancelButton } from '../ApproveModal/style'
import * as S from './style'

const RejectModal = ({
  type,
  title,
  onAppropriation,
}: AppropriationModalProps) => {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.RejectModalWrapper>
        <S.RejectLetterContainer>
          <S.RejectQuestion>{type}을(를) 거절하시겠습니까?</S.RejectQuestion>
          <S.RejectTitle>{title}</S.RejectTitle>
        </S.RejectLetterContainer>
        <S.RejectButtonWrapper>
          <CancelButton onClick={closeModal}>취소</CancelButton>
          <S.RejectButton onClick={onAppropriation}>
            {type.includes('공지') ? '삭제하기' : '거절하기'}
          </S.RejectButton>
        </S.RejectButtonWrapper>
      </S.RejectModalWrapper>
    </Portal>
  )
}

export default RejectModal
