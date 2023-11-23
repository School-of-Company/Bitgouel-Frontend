'use client'

import { useDeleteRejectLecture } from '@bitgouel/api'

import { useDeleteRejectActivity } from '@bitgouel/api'

import { AppropriationModalProps } from '@bitgouel/types'

import { useModal } from '../../hooks'
import Portal from '../../portal'
import { CancelButton } from '../ApproveModal/style'
import * as S from './style'

const RejectModal = ({ type, title, id }: AppropriationModalProps) => {
  const { closeModal } = useModal()
  const { mutate: lectureReject } = useDeleteRejectLecture(id)
  const { mutate: activityReject } = useDeleteRejectActivity(id)

  const handleReject = () => {
    if (type === '강의 개설') lectureReject()
    else if (type === '활동 추가') activityReject()
  }

  return (
    <Portal onClose={closeModal}>
      <S.RejectModalWrapper>
        <S.RejectLetterContainer>
          <S.RejectQuestion>{type}을(를) 거절하시겠습니까?</S.RejectQuestion>
          <S.RejectTitle>{title}</S.RejectTitle>
        </S.RejectLetterContainer>
        <S.RejectButtonWrapper>
          <CancelButton onClick={closeModal}>취소</CancelButton>
          <S.RejectButton onClick={handleReject}>거절하기</S.RejectButton>
        </S.RejectButtonWrapper>
      </S.RejectModalWrapper>
    </Portal>
  )
}

export default RejectModal
