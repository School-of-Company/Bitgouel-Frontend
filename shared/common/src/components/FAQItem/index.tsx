'use client'

import { useState } from 'react'
import * as S from './style'

const FAQItem = () => {
  const [answerStatus, setAnswerStatus] = useState<boolean>(false)

  return (
    <S.FAQItemWrapper onClick={() => setAnswerStatus(!answerStatus)}>
      <S.TitleBox>
        <S.QMark>Q.</S.QMark>
        <span>학원에서 자격증 과정을 운영할 수 있나요?</span>
      </S.TitleBox>
      <S.AnswerBox answerView={answerStatus}>
        <S.QMark>A.</S.QMark>
        <S.Answer>
          직업계고 중 소수의 학과가 운영되는 경우 수강인원 확보가 어려워 대학
          연계를 지원하지 못하였습니다. 참여 학생의 수강신청을 담보할 수 없는
          상황에서 무리한 교육과정 개설은 신청 미달 시 지역대학에게 부담이 될 수
          있기에 이러한 결정을 내렸습니다.
        </S.Answer>
      </S.AnswerBox>
    </S.FAQItemWrapper>
  )
}
export default FAQItem
