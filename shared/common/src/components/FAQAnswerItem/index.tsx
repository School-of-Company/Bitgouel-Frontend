'use client'

import { usePostQuestion } from '@bitgouel/api'
import { AuthorityContext } from '@bitgouel/common'
import { ChangeEvent, useContext, useReducer, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const QUESTIONMXLENGTH: number = 100 as const
const ANSWERMAXLENGTH: number = 3000 as const

const initialState = {
  question: '',
  answer: '',
}

const SET_QUESTION = 'SET_QUESTION' as const
const SET_ANSWER = 'SET_ANSWER' as const
const RESET = 'RESET' as const

type ActionType =
  | { type: typeof SET_QUESTION; payload: string }
  | { type: typeof SET_ANSWER; payload: string }
  | { type: typeof RESET }

function reducer(FAQstate: typeof initialState, action: ActionType) {
  switch (action.type) {
    case SET_QUESTION:
      return { ...FAQstate, question: action.payload }
    case SET_ANSWER:
      return { ...FAQstate, answer: action.payload }
    case RESET:
      return initialState
    default:
      return FAQstate
  }
}

const FAQAnswerItem = ({ refetchFAQs }: { refetchFAQs: () => void }) => {
  const [answerStatus, setAnswerStatus] = useState<boolean>(false)
  const [faqState, dispatch] = useReducer(reducer, initialState)
  const authority = useContext(AuthorityContext)

  const { mutate } = usePostQuestion({
    onSuccess: () => {
      toast.success('작성되었습니다')
      dispatch({ type: RESET })
      refetchFAQs()
    },
    onError: () => {
      toast.error('작성에 실패하였습니다')
    },
  })

  const answeringDelete = () => {
    dispatch({ type: RESET })
    setAnswerStatus(false)
  }

  const onCreate = () => {
    if (faqState.question && faqState.answer) {
      mutate({
        question: faqState.question,
        answer: faqState.answer,
      })
      setAnswerStatus(false)
    } else {
      toast.error('빈 공백을 입력해주세요.')
    }
  }

  return (
    <S.FAQAnswerItemWrapper isAdmin={authority === 'ROLE_ADMIN'}>
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
            value={faqState.question}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: SET_QUESTION, payload: e.target.value })
            }
            maxLength={QUESTIONMXLENGTH}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.QMark>A.</S.QMark>
          <S.Input
            placeholder='답변 작성하기'
            value={faqState.answer}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: SET_ANSWER, payload: e.target.value })
            }
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
