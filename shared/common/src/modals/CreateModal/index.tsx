'use client'

import { CreateModalProps } from '@bitgouel/types'
import { useModal } from '../../hooks'
import Portal from '../../portal'
import * as S from './style'

const CreateModal = ({
  question,
  title,
  onCreate,
  createText,
}: CreateModalProps) => {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.CreateModalWrapper>
        <S.LetterContainer>
          <S.CreateQuestion>{question}</S.CreateQuestion>
          <S.CreateTitle>{title}</S.CreateTitle>
        </S.LetterContainer>
        <S.CreateButtonWrapper>
          <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
          <S.CreateButton onClick={onCreate}>{createText}</S.CreateButton>
        </S.CreateButtonWrapper>
      </S.CreateModalWrapper>
    </Portal>
  )
}

export default CreateModal
