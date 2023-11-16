'use client'

import { usePatchApproveLecture } from '@bitgouel/api'
import { useModal } from '@common/hooks'
import Portal from '@common/portal'
import React from 'react'
import { LectureLetterContainer } from '../LectureCreateModal/style'
import * as S from './style'

const LectureApproveModal = ({
  title,
  lectureId,
}: {
  title: string
  lectureId: string
}) => {
  const { closeModal } = useModal()
  const { mutate } = usePatchApproveLecture(lectureId)

  return (
    <Portal onClose={closeModal}>
      <S.LectureApproveModalWrapper>
        <LectureLetterContainer>
          <S.LectureApproveQuestion>
            강의를 개설을 수락하시겠습니까?
          </S.LectureApproveQuestion>
          <S.LectureApproveTitle>{title}</S.LectureApproveTitle>
        </LectureLetterContainer>
        <S.LectureApproveButtonWrapper>
          <S.ApproveCancleButton onClick={closeModal}>
            취소
          </S.ApproveCancleButton>
          <S.ApproveButton onClick={() => mutate()}>수락하기</S.ApproveButton>
        </S.LectureApproveButtonWrapper>
      </S.LectureApproveModalWrapper>
    </Portal>
  )
}

export default LectureApproveModal
