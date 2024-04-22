'use client'

import React, { ChangeEvent } from 'react'
import * as S from './style'
import { CommonCheckBox } from '@bitgouel/common'

interface ApplyItemProps {
  item: {
    id: string
    cohort: number
    name: string
    school: string
    grade: number
    classNum: number
    clubName: string
    phoneNumber: string
    email: string
  }
  ids: string[]
  handleSelectUsers: (checked: boolean, userId: string) => void
}

const ApplyItem = ({ item, ids, handleSelectUsers }: ApplyItemProps) => {
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
            {item.grade}학년 {item.classNum}반
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

export default ApplyItem
