'use client'
import * as S from './style'
import { Circle } from '../../assets/index'

const sequenceList = [
  { name: '사업소개', scroll: 722 },
  { name: '관련 학교 소개', scroll: 1580 },
  { name: '취업 동아리 소개', scroll: 2500 },
  { name: '연계 대학 소개', scroll: 4000 },
  { name: '참여 기업 소개', scroll: 4900 },
  { name: '유관 기관 소개', scroll: 5800 },
  { name: '자주 묻는 질문', scroll: 6700 },
]

const Sequence = () => {
  return (
    <S.SequenceWrapper>
      {sequenceList.map((sequence, idx) => (
        <S.TextContainer
          onClick={() => {
            window.scrollTo({
              top: sequence.scroll,
              behavior: 'smooth',
            })
          }}
          key={idx}
        >
          <Circle />
          {sequence.name}
          <div />
        </S.TextContainer>
      ))}
    </S.SequenceWrapper>
  )
}
export default Sequence
