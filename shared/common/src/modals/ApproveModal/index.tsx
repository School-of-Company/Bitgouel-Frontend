'use client'

import { usePatchApproveLecture } from '@bitgouel/api'
import { useModal } from '../../hooks'
import Portal from '../../portal'
import React from 'react'
import * as S from './style'

const ApproveModal = ({
  type,
  title,
  id,
}: {
  type: string
  title: string
  id: string
}) => {
  const { closeModal } = useModal()
  const { mutate: lectureApprove } = usePatchApproveLecture(id)
  //   const { mutate: activityApprove } = usePatchApproveActivity(id)

  const handleApprove = () => {
    if (type === '강의 개설') lectureApprove()
    // else if (type === '활동 추가') activityApprove()
  }

  return (
    <Portal onClose={closeModal}>
      <S.ApproveModalWrapper>
        <S.ApproveLetterContainer>
          <S.ApproveQuestion>{type}을(를) 승인하시겠습니까?</S.ApproveQuestion>
          <S.ApproveTitle>{title}</S.ApproveTitle>
        </S.ApproveLetterContainer>
        <S.ApproveButtonWrapper>
          <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
          <S.ApproveButton onClick={handleApprove}>승인하기</S.ApproveButton>
        </S.ApproveButtonWrapper>
      </S.ApproveModalWrapper>
    </Portal>
  )
}

export default ApproveModal
