'use client'

import { Portal, useModal } from '@bitgouel/common'
import { AppropriationModalProps } from '@bitgouel/types'
import { useState } from 'react'
import * as S from './style'

const AppropriationModal = ({
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
    try {
      await new Promise((resolve, reject) => setTimeout(() => {
        onAppropriation({
          onSuccess: resolve,
          onError: reject,
        })
      }, 2000))
    } catch {
      setIsDisabled(false)
    }
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
