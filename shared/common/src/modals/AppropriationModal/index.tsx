'use client'

import { AppropriationModalProps } from '@bitgouel/types'
import { Portal, useModal } from '@bitgouel/common'
import * as S from './style'

const AppropriationModal = ({
  isApprove,
  question,
  purpose,
  title,
  onAppropriation,
}: AppropriationModalProps) => {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.AppropriationModalWrapper isAdmin={title.length === 0}>
        <S.AppropriationLetterContainer>
          <S.AppropriationQuestion>{question}</S.AppropriationQuestion>
          {title.length !== 0 && (
            <S.AppropriationTitle>{title}</S.AppropriationTitle>
          )}
        </S.AppropriationLetterContainer>
        <S.AppropriationButtonWrapper>
          <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
          <S.AppropriationButton
            isApprove={isApprove}
            onClick={onAppropriation}
          >
            {purpose}
          </S.AppropriationButton>
        </S.AppropriationButtonWrapper>
      </S.AppropriationModalWrapper>
    </Portal>
  )
}

export default AppropriationModal
