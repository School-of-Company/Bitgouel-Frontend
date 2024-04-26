'use client'

import * as S from './style'

const CompleteLectureItem = () => {
  return (
    <S.ItemContainer>
      <S.ItemContentContainer>
        <S.TitleContainer>
          <S.TitleTypeBox>
            <S.TitleType>상호학점인정교육과정</S.TitleType>
          </S.TitleTypeBox>
          <S.TitleBox>
            <S.Title>그날 학교는 파괴적인 불꽃으로 타올랐다.</S.Title>
            <S.Line />
          </S.TitleBox>
        </S.TitleContainer>
        <div>
          <S.professorName>이태랑 교수님</S.professorName>
        </div>
      </S.ItemContentContainer>
      <div>
        <S.Date>2023년 4월 18일 이수</S.Date>
      </div>
    </S.ItemContainer>
  )
}

export default CompleteLectureItem
