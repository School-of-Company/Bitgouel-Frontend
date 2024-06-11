'use client'

import { TokenManager, usePostQuestion } from '@bitgouel/api'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'
import { AuthorityContext } from '../../contexts'

const QUESTIONMXLENGTH: number = 100 as const
const ANSWERMAXLENGTH: number = 3000 as const

const FAQAnswerItem = ({ refetchFAQs }: { refetchFAQs: () => void }) => {
  const [answerStatus, setAnswerStatus] = useState<boolean>(false)
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const authority = useContext(AuthorityContext)

  const { mutate } = usePostQuestion({
    onSuccess: () => {
      toast.success('작성되었습니다.')
      setQuestion('')
      setAnswer('')
      refetchFAQs()
    },
    onError: () => {
      toast.error('작성에 실패하였습니다.')
    },
  })

  const answeringDelete = () => {
    setQuestion('')
    setAnswer('')
    setAnswerStatus(false)
  }

  const onCreate = () => {
    if (question && answer) {
      mutate({
        question: question,
        answer: answer,
      })
      setAnswerStatus(false)
    } else {
      toast.error('빈 공백을 입력해주세요.')
    }
  }

  useEffect(() => {
    setIsAdmin(authority === 'ROLE_ADMIN')
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
            maxLength={QUESTIONMXLENGTH}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.QMark>A.</S.QMark>
          <S.Input
            placeholder='답변 작성하기'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            maxLength={ANSWERMAXLENGTH}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.DeleteButton onClick={() => answeringDelete()}>
            취소
          </S.DeleteButton>
          <S.SuccessButton onClick={onCreate}>작성</S.SuccessButton>
        </S.ButtonWrapper>
      </S.AnsweringBox>
    </S.FAQAnswerItemWrapper>
  )
}
export default FAQAnswerItem
