'use client'

import { useDeleteRejectLecture } from '@bitgouel/api'
import { useModal } from '@common/hooks'
import Portal from '@common/portal'
import React from 'react'
import { LectureLetterContainer } from '../LectureCreateModal/style'
import * as S from './style'

const LectureRejectModal = ({
  title,
  lectureId,
}: {
  title: string
  lectureId: string
}) => {
  const { closeModal } = useModal()
  const { mutate } = useDeleteRejectLecture(lectureId)

  return (
    <Portal onClose={closeModal}>
      <S.LectureRejectModalWrapper>
        <LectureLetterContainer>
          <S.LectureRejectQuestion>
            강의 개설을 거절하시겠습니까?
          </S.LectureRejectQuestion>
          <S.LectureRejectTitle>{title}</S.LectureRejectTitle>
        </LectureLetterContainer>
        <S.LectureRejectButtonWrapper>
          <S.RejectCancleButton onClick={closeModal}>취소</S.RejectCancleButton>
          <S.RejectButton onClick={() => mutate()}>거절하기</S.RejectButton>
        </S.LectureRejectButtonWrapper>
      </S.LectureRejectModalWrapper>
    </Portal>
  )
}

export default LectureRejectModal
