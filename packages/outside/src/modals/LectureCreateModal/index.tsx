'use client'

import { usePostCreateLecture } from '@bitgouel/api'
import { useModal } from '@common/hooks'
import Portal from '@common/portal'
import React from 'react'
import LectureCreateNoticeModal from '../LectureCreateNoticeModal'
import * as S from './style'

interface LectureCreateItemType {
  createValues: {
    name: string
    content: string
    startDate: string
    endDate: string
    completeDate: string
    lectureType: string
    credit: number
    maxRegisteredUser: number
  }
}

const LectureCreateModal = ({ createValues }: LectureCreateItemType) => {
  const { openModal, closeModal } = useModal()
  const { mutate, data } = usePostCreateLecture()

  const onCreate = () => {
    mutate(createValues)

    if (data?.status === 201) {
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
