'use client'

import {
  useGetInquiryDetail,
  usePatchMyInquiry,
  usePostInquiry,
} from '@bitgouel/api'
import { AppropriationModal, Bg5, useModal } from '@bitgouel/common'
import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'

const TITLEMAXLENGTH: number = 100 as const
const MAINMAXLENGTH: number = 1000 as const

const InquiryWritePage = ({ inquiryId }: { inquiryId?: string }) => {
  const [inquiryTitle, setInquiryTitle] = useState<string>('')
  const [inquiryContent, setInquiryContent] = useState<string>('')
  const { openModal } = useModal()
  const { data, isSuccess } = useGetInquiryDetail(inquiryId || '', {
    enabled: !!inquiryId,
  })
  const { question, questionDetail } = data?.data || {}
  const { mutate: postInquiry } = usePostInquiry()
  const { mutate: patchInquiry } = usePatchMyInquiry(inquiryId || '')

  useEffect(() => {
    if (isSuccess) {
      setInquiryTitle(question || '')
      setInquiryContent(questionDetail || '')
    }
  }, [data])

  const isCondition = () => {
    if (isSuccess) {
      if (
        data?.data.question !== inquiryTitle ||
        data?.data.questionDetail !== inquiryContent
      )
        return true
      else return false
    } else {
      if (inquiryTitle !== '' && inquiryContent !== '') return true
      else return false
    }
  }

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.CreateTitle>문의하기</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={inquiryTitle}
            placeholder='문의 제목(100자 이내)'
            maxLength={TITLEMAXLENGTH}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInquiryTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={inquiryContent}
            maxLength={MAINMAXLENGTH}
            placeholder='본문 입력 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInquiryContent(e.target.value)
            }
          />
          <S.ButtonContainer>
            <S.CreateButton
              isAble={isCondition()}
              onClick={() =>
                isCondition() && isSuccess
                  ? openModal(
                      <AppropriationModal
                        isApprove={true}
                        question='문의를 수정하시겠습니까?'
                        title={inquiryTitle}
                        purpose='수정하기'
                        onAppropriation={() =>
                          patchInquiry({
                            question: inquiryTitle,
                            questionDetail: inquiryContent,
                          })
                        }
                      />
                    )
                  : openModal(
                      <AppropriationModal
                        isApprove={true}
                        question='문의하시겠습니까?'
                        title={inquiryTitle}
                        purpose='문의하기'
                        onAppropriation={() =>
                          postInquiry({
                            question: inquiryTitle,
                            questionDetail: inquiryContent,
                          })
                        }
                      />
                    )
              }
            >
              문의하기
            </S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default InquiryWritePage
