'use client'

import { AppropriationModalProps } from '@bitgouel/types'
import * as S from './style'
import { useModal, Portal } from '@bitgouel/common'
import { useState } from 'react'

const AppropriationModal = ({
  isPending,
  isApprove,
  question,
  purpose,
  title,
  onAppropriation,
}: AppropriationModalProps) => {
  const { closeModal } = useModal()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const awaitAppropriation = async () => {
    setIsDisabled(true)
    await new Promise((resolve) => setTimeout(() => {
      resolve(onAppropriation())
    }, 2000))
  }

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
            onClick={awaitAppropriation}
            disabled={isDisabled}
          >
            {purpose}
          </S.AppropriationButton>
        </S.AppropriationButtonWrapper>
      </S.AppropriationModalWrapper>
    </Portal>
  )
}

export default AppropriationModal
