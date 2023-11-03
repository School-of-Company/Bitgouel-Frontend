import * as S from './style'
import { Circle } from '../../assets/index'

const Sequence = () => {
  const list = [
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
      {list.map((item, idx) => (
        <S.TextContainer key={idx}>
          <Circle />
          {item}
          <div />
        </S.TextContainer>
      ))}
    </S.SequenceWrapper>
  )
}
export default Sequence
