'use client'

import { LectureTypeModalProps } from '@bitgouel/types'
import React from 'react'
import * as S from './style'

const LectureTypeModal = ({
  location,
  text,
  setText,
  setIsLectureType,
}: LectureTypeModalProps) => {
  return (
    <>
      <S.SelectFilterBox location={location}>
        <S.SelectFilterTitle>강의 유형</S.SelectFilterTitle>
        <S.SelectFilterItemContainer>
          <S.SelectFilterLabel htmlFor='check'>
            <S.SelectFilterCheckBox
              id='check'
              type='checkbox'
              checked={text === '상호학점인정교육과정'}
              onChange={() => {
                setText('상호학점인정교육과정')
                setIsLectureType(false)
              }}
            />
            <S.SelectFilterText>상호학점인정교육과정</S.SelectFilterText>
          </S.SelectFilterLabel>
          <S.SelectFilterLabel htmlFor='check'>
            <S.SelectFilterCheckBox
              id='check'
              type='checkbox'
              checked={text === '대학탐방프로그램'}
              onChange={() => {
                setText('대학탐방프로그램')
                setIsLectureType(false)
              }}
            />
            <S.SelectFilterText>대학탐방프로그램</S.SelectFilterText>
          </S.SelectFilterLabel>
        </S.SelectFilterItemContainer>
      </S.SelectFilterBox>
    </>
  )
}

export default LectureTypeModal
