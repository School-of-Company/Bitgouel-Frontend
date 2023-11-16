'use client'

import { usePostCreateLecture } from '@bitgouel/api'
import { useModal } from '@common/hooks'
import Portal from '@common/portal'
import React from 'react'
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
  const { closeModal } = useModal()
  const { mutate } = usePostCreateLecture()

  return (
    <Portal onClose={closeModal}>
      <S.LectureCreateModalWrapper>
        <S.LectureLetterContainer>
          <S.LectureCreateQuestion>
            강의를 개설하시겠습니까?
          </S.LectureCreateQuestion>
          <S.LectureCreateTitle>
            국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고
            균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에
            관한 필요한 제한과 의무를 과할 수 있다.
          </S.LectureCreateTitle>
        </S.LectureLetterContainer>
        <S.LectureCreateButtonWrapper>
          <S.CancleButton onClick={closeModal}>취소</S.CancleButton>
          <S.CreateButton onClick={() => mutate(createValues)}>
            개설하기
          </S.CreateButton>
        </S.LectureCreateButtonWrapper>
      </S.LectureCreateModalWrapper>
    </Portal>
  )
}

export default LectureCreateModal
