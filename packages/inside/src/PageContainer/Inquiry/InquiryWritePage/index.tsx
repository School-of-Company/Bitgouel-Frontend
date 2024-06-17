'use client'

import {
  useGetInquiryDetail,
  usePatchMyInquiry,
  usePostInquiry,
} from '@bitgouel/api'
import { AppropriationModal, Bg5, useModal, MainStyle } from '@bitgouel/common'
import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'
import { AppropriationModalProps, InquiryPayloadTypes } from '@bitgouel/types'

const TITLE_MAX_LENGTH: number = 100 as const
const MAIN_MAX_LENGTH: number = 1000 as const

const InquiryWritePage = ({ inquiryId }: { inquiryId?: string }) => {
  const [inquiryTitle, setInquiryTitle] = useState<string>('')
  const [inquiryContent, setInquiryContent] = useState<string>('')
  const { openModal } = useModal()
  const { data, isSuccess } = useGetInquiryDetail(inquiryId || '', {
    enabled: !!inquiryId,
  })
  const { mutate: createInquiry } = usePostInquiry()
  const { mutate: modifyInquiry } = usePatchMyInquiry(inquiryId || '')

  useEffect(() => {
    if (isSuccess && data) {
      setInquiryTitle(data.question)
      setInquiryContent(data.questionDetail || '')
    }
  }, [data])

  const isAble = () => {
    if (isSuccess && data) {
      if (
        data.question !== inquiryTitle ||
        data.questionDetail !== inquiryContent
      )
        return true
      else return false
    } else {
      if (inquiryTitle !== '' && inquiryContent !== '') return true
      else return false
    }
  }

  const onInquiry = () => {
    const condition: boolean = isAble() && isSuccess
    const inquiryPayload: InquiryPayloadTypes = {
      question: inquiryTitle,
      questionDetail: inquiryContent,
    }
    const ModalParameter: AppropriationModalProps = {
      isApprove: true,
      question: condition
        ? '문의하시겠습니까?'
        : '문의를 수정하시겠습니까?',
      title: inquiryTitle || '',
      purpose: condition ? '문의하기' : '수정하기',
      onAppropriation: (callbacks) =>
        condition
          ? createInquiry(inquiryPayload, callbacks)
          : modifyInquiry(inquiryPayload, callbacks),
    }

    openModal(
      <AppropriationModal
        isApprove={ModalParameter.isApprove}
        question={ModalParameter.question}
        title={ModalParameter.title}
        purpose={ModalParameter.purpose}
        onAppropriation={ModalParameter.onAppropriation}
      />
    )
  }

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg5}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>문의하기</MainStyle.PageTitle>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <S.InputTitle
            value={inquiryTitle}
            placeholder='문의 제목(100자 이내)'
            maxLength={TITLE_MAX_LENGTH}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInquiryTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={inquiryContent}
            maxLength={MAIN_MAX_LENGTH}
            placeholder='본문 입력 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInquiryContent(e.target.value)
            }
          />
          <S.ButtonContainer>
            <S.CreateButton
              isAble={isAble()}
              onClick={onInquiry}
            >
              문의하기
            </S.CreateButton>
          </S.ButtonContainer>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default InquiryWritePage
