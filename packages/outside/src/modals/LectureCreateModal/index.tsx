'use client'

import { LectureCreateModalProps } from '@bitgouel/types'
import { usePostCreateLecture } from '@bitgouel/api'
import { useModal } from '@bitgouel/common/src/hooks'
import Portal from '@bitgouel/common/src/portal'
import React from 'react'
import LectureCreateNoticeModal from '../LectureCreateNoticeModal'
import * as S from './style'

const LectureCreateModal = ({ createValues }: LectureCreateModalProps) => {
  const { openModal, closeModal } = useModal()
  const { mutate, isSuccess } = usePostCreateLecture()

  const onCreate = () => {
    mutate(createValues)

    if (isSuccess) {
      closeModal()
      openModal(<LectureCreateNoticeModal />)
    }
  }

  return (
    <Portal onClose={closeModal}>
      <S.LectureCreateModalWrapper>
        <S.LectureLetterContainer>
          <S.LectureCreateQuestion>
            강의를 개설하시겠습니까?
          </S.LectureCreateQuestion>
          <S.LectureCreateTitle>{createValues.name}</S.LectureCreateTitle>
        </S.LectureLetterContainer>
        <S.LectureCreateButtonWrapper>
          <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
          <S.CreateButton onClick={onCreate}>개설하기</S.CreateButton>
        </S.LectureCreateButtonWrapper>
      </S.LectureCreateModalWrapper>
    </Portal>
  )
}

export default LectureCreateModal
