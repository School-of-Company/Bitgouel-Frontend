'use client'

import { useState } from 'react'
import * as S from './style'

const FAQAnswerItem = () => {
  const [answerStatus, setAnswerStatus] = useState<boolean>(false)
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')

  const answeringDelete = () => {
    setQuestion('')
    setAnswer('')
    setAnswerStatus(false)
  }

  return (
    <S.FAQAnswerItemWrapper>
      <S.Title
        onClick={() => setAnswerStatus(!answerStatus)}
        answerView={answerStatus}
      >
        + 자주 묻는 질문 추가하기
      </S.Title>
      <S.AnsweringBox answerView={answerStatus}>
        <S.InputWrapper>
          <S.QMark>Q.</S.QMark>
          <S.Input
            placeholder='질문 작성하기'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.QMark>A.</S.QMark>
          <S.Input
            placeholder='답변 작성하기'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.DeleteButton onClick={() => answeringDelete()}>
            취소
          </S.DeleteButton>
          <S.SuccessButton>작성</S.SuccessButton>
        </S.ButtonWrapper>
      </S.AnsweringBox>
    </S.FAQAnswerItemWrapper>
  )
}
export default FAQAnswerItem
