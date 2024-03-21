'use client'

import { useEffect, useState } from 'react'
import * as S from './style'
import { TokenManager } from '@bitgouel/api'

const FAQAnswerItem = () => {
  const tokenManager = new TokenManager()

  const [answerStatus, setAnswerStatus] = useState<boolean>(false)
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  const answeringDelete = () => {
    setQuestion('')
    setAnswer('')
    setAnswerStatus(false)
  }

  useEffect(() => {
    if (tokenManager.authority === 'ROLE_ADMIN') setIsAdmin(true)
  }, [])

  return (
    <S.FAQAnswerItemWrapper isAdmin={isAdmin}>
      <S.Title
        onClick={() => setAnswerStatus(!answerStatus)}
        answerView={answerStatus}
      >
        + 자주 묻는 질문 추가하기
      </S.Title>
      <S.AnsweringBox answerStatus={answerStatus}>
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
