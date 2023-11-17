'use client'

import React from 'react'
import * as S from './style'

const SelectScoreModal = ({
  score,
  setScore,
  setIsScore,
}: {
  score: string
  setScore: React.Dispatch<React.SetStateAction<string>>
  setIsScore: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <S.SelectScoreBox>
      <S.SelectScoreTitle>학점 선택</S.SelectScoreTitle>
      <S.SelectScoreItemContainer>
        <S.SelectScoreLabel htmlFor='check'>
          <S.SelectScoreCheckBox
            id='check'
            type='checkbox'
            checked={score === '1점'}
            onChange={() => {
              setScore('1점')
              setIsScore(false)
            }}
          />
          <S.SelectScoreText>1점</S.SelectScoreText>
        </S.SelectScoreLabel>
        <S.SelectScoreLabel htmlFor='check'>
          <S.SelectScoreCheckBox
            id='check'
            type='checkbox'
            checked={score === '2점'}
            onChange={() => {
              setScore('2점')
              setIsScore(false)
            }}
          />
          <S.SelectScoreText>2점</S.SelectScoreText>
        </S.SelectScoreLabel>
      </S.SelectScoreItemContainer>
    </S.SelectScoreBox>
  )
}

export default SelectScoreModal
