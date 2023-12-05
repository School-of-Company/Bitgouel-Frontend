'use client'
import * as S from './style'
import { Circle } from '../../assets/index'

const Sequence = () => {
  const sequenceList = [
    '사업소개',
    '관련 학교 소개',
    '연계 대학 소개',
    '관련 기관 소개',
    '취업 동아리 소개',
    '참여 기업 소개',
    '자주 묻는 질문',
  ]


  return (
    <S.SequenceWrapper>
      {sequenceList.map((sequence, idx) => (
        <S.TextContainer key={idx}>
          <Circle />
          {sequence}
          <div />
        </S.TextContainer>
      ))}
    </S.SequenceWrapper>
  )
}
export default Sequence
