'use client'

import { useGetInquiryDetail, usePatchMyInquiry } from '@bitgouel/api'
import { AppropriationModal, Bg5, useModal } from '@bitgouel/common'
import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'

const InquiryModifyPage = ({ inquiryId }: { inquiryId: string }) => {
  const MAXLENGTH: number = 1000 as const
  const [modifyTitle, setModifyTitle] = useState<string>('')
  const [modifyContent, setModifyContent] = useState<string>('')

  const { openModal } = useModal()
  const { data } = useGetInquiryDetail(inquiryId)
  const { mutate } = usePatchMyInquiry(inquiryId)

  useEffect(() => {
    if (data) {
      setModifyTitle(data?.data.question)
      setModifyContent(data?.data.questionDetail)
    }
  }, [data])

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.CreateTitle>문의 수정</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={modifyTitle}
            placeholder='문의 제목(100자 이내)'
            maxLength={100}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setModifyTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={modifyContent}
            maxLength={MAXLENGTH}
            placeholder='본문 입력 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setModifyContent(e.target.value)
            }
          />
          <S.ButtonContainer>
            <S.CreateButton
              isAble={
                data?.data.question !== modifyTitle ||
                data?.data.questionDetail !== modifyContent
              }
              onClick={() =>
                data?.data.question !== modifyTitle ||
                data?.data.questionDetail !== modifyContent
                  ? openModal(
                      <AppropriationModal
                        isApprove={true}
                        question='문의를 수정하시겠습니까?'
                        title={modifyTitle}
                        purpose='수정하기'
                        onAppropriation={() =>
                          mutate({
                            question: modifyTitle,
                            questionDetail: modifyContent,
                          })
                        }
                      />
                    )
                  : null
              }
            >
              수정 완료
            </S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default InquiryModifyPage
