'use client'

import { lectureQueryKeys, usePatchApplyComplete } from '@bitgouel/api'
import {
  CommonCheckBox,
} from '@bitgouel/common'
import { LectureApplyItemProps } from '@bitgouel/types'
import * as S from './style'
import { useQueryClient } from '@tanstack/react-query'

const LectureApplyItem = ({ item, lectureId }: LectureApplyItemProps) => {
  const queryClient = useQueryClient()
  const { mutate } = usePatchApplyComplete(lectureId, item.id, !item.isComplete, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: lectureQueryKeys.getLectureApplyList(lectureId)})
    }
  })

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
        checked={item.isComplete}
        onChange={() => mutate()}
      />
    </S.ApplyItemWrapper>
  )
}

export default LectureApplyItem
