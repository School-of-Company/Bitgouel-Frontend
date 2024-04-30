'use client'

import { CommonCheckBox } from '@bitgouel/common'
import { LectureApplyItemProps } from '@bitgouel/types'
import * as S from './style'

const LectureApplyItem = ({
  item,
  ids,
  handleSelectUsers,
}: LectureApplyItemProps) => {
  return (
    <S.ApplyItemWrapper>
      <S.ApplyInfoContainer>
        <S.NameBox>
          <S.CohortText>{item.cohort}기</S.CohortText>
          <S.NameText>{item.name}</S.NameText>
        </S.NameBox>
        <S.SchoolInfoBox>
          <span>{item.school}</span>
          <span>
            {item.grade}학년 {item.classNumber}반 {item.number}번
          </span>
          <span>{item.clubName}</span>
        </S.SchoolInfoBox>
        <S.ContactInfo>
          <span>{item.phoneNumber}</span>
          <span>{item.email}</span>
        </S.ContactInfo>
      </S.ApplyInfoContainer>
      <CommonCheckBox
        id={item.id}
        ids={ids}
        onChange={(checked: boolean) => handleSelectUsers(checked, item.id)}
      />
    </S.ApplyItemWrapper>
  )
}

export default LectureApplyItem
