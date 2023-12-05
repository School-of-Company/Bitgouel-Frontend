'use client'

import { AppropriationModalProps } from '@bitgouel/types'
import { useModal } from '../../hooks'
import Portal from '../../portal'
import * as S from './style'

const ApproveModal = ({
  type,
  title,
  onAppropriation,
}: AppropriationModalProps) => {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.ApproveModalWrapper>
        <S.ApproveLetterContainer>
          <S.ApproveQuestion>{type}을(를) 승인하시겠습니까?</S.ApproveQuestion>
          <S.ApproveTitle>{title}</S.ApproveTitle>
        </S.ApproveLetterContainer>
        <S.ApproveButtonWrapper>
          <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
          <S.ApproveButton onClick={onAppropriation}>승인하기</S.ApproveButton>
        </S.ApproveButtonWrapper>
      </S.ApproveModalWrapper>
    </Portal>
  )
}

export default ApproveModal
