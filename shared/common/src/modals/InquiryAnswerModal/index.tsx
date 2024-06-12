'use client'

import { usePostAnswer } from '@bitgouel/api'
import { CancelIcon, Portal, useModal } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import AppropriationModal from '../AppropriationModal'
import * as S from './style'

const InquiryAnswerModal = ({ inquiryId }: { inquiryId: string }) => {
  const { openModal, closeModal } = useModal()
  const [answer, setAnswer] = useState('')
  const { mutate, isLoading: answerLoading } = usePostAnswer(inquiryId)

  const onAnswer = () =>
    openModal(
      <AppropriationModal
        isPending={answerLoading}
        isApprove={true}
        question='문의를 답변하시겠습니까?'
        purpose='답변하기'
        title={answer}
        onAppropriation={() => mutate({ answer })}
      />
    )

  return (
    <Portal onClose={closeModal}>
      <S.InquiryAnswerModalWrapper>
        <S.ModalTitleContainer>
          <h2>문의 답변하기</h2>
          <CancelIcon onClick={closeModal} />
        </S.ModalTitleContainer>
        <S.AnswerBox
          value={answer}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setAnswer(e.target.value)
          }
          placeholder='답변 내용 작성(최대 500자)'
          maxLength={500}
        />
        <S.AnswerButton onClick={onAnswer}>답변하기</S.AnswerButton>
      </S.InquiryAnswerModalWrapper>
    </Portal>
  )
}

export default InquiryAnswerModal
