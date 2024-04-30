'use client'

import { LectureItem } from '@bitgouel/types'
import * as S from './style'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const CompleteLectureItem = ({ item }: { item: LectureItem }) => {
  return (
    <S.ItemContainer>
      <S.ItemContentContainer>
        <S.TitleContainer>
          <S.TitleTypeBox>
            <S.TitleType>{item.lectureType}</S.TitleType>
          </S.TitleTypeBox>
          <S.TitleBox>
            <S.Title>{item.name}</S.Title>
            <S.Line />
          </S.TitleBox>
        </S.TitleContainer>
        <S.professorName>{item.lecturer}</S.professorName>
      </S.ItemContentContainer>
      {item.isComplete ? (
        <S.Date>
          {dayjs(item.currentCompletedDate).format('YYYY년 MM월 DD일')} 이수
        </S.Date>
      ) : (
        <S.Date>미이수</S.Date>
      )}
    </S.ItemContainer>
  )
}

export default CompleteLectureItem
