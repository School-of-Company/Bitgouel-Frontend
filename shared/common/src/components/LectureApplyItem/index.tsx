'use client'

import { usePatchApplyComplete } from '@bitgouel/api'
import {
  CommonCheckBox,
  enumToSchoolName,
  slicePhoneNumber,
} from '@bitgouel/common'
import { LectureApplyItemProps } from '@bitgouel/types'
import * as S from './style'

const LectureApplyItem = ({ item, lectureId }: LectureApplyItemProps) => {
  const { mutate } = usePatchApplyComplete(lectureId, item.id, item.isComplete)

  return (
    <S.ApplyItemWrapper>
      <S.ApplyInfoContainer>
        <S.NameBox>
          <S.CohortText>{item.cohort}기</S.CohortText>
          <S.NameText>{item.name}</S.NameText>
        </S.NameBox>
        <S.SchoolInfoBox>
          <span>{enumToSchoolName[item.school]}</span>
          <span>
            {item.grade}학년 {item.classNumber}반 {item.number}번
          </span>
          <span>{item.clubName}</span>
        </S.SchoolInfoBox>
        <S.ContactInfo>
          <span>{slicePhoneNumber(item.phoneNumber)}</span>
          <span>{item.email}</span>
        </S.ContactInfo>
      </S.ApplyInfoContainer>
      <CommonCheckBox checked={!item.isComplete} onChange={() => mutate()} />
    </S.ApplyItemWrapper>
  )
}

export default LectureApplyItem
