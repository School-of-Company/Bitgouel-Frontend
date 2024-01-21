'use client'

import { usePostInquiry } from '@bitgouel/api'
import { Bg5, CreateModal, useModal } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import * as S from './style'

const InquiryCreatePage = () => {
  const MAXLENGTH: number = 1000 as const

  const [inquiryTitle, setInquiryTitle] = useState<string>('')
  const [inquiryContent, setInquiryContent] = useState<string>('')

  const { openModal } = useModal()

  const { mutate } = usePostInquiry()

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
            maxLength={100}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInquiryTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={inquiryContent}
            maxLength={MAXLENGTH}
            placeholder='본문 입력 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInquiryContent(e.target.value)
            }
          />
          <S.ButtonContainer>
            <S.CreateButton
              isAble={inquiryTitle !== '' && inquiryContent !== ''}
              onClick={() =>
                inquiryTitle !== '' && inquiryContent !== ''
                  ? openModal(
                      <CreateModal
                        question='문의하시겠습니까?'
                        title={inquiryTitle}
                        onCreate={() =>
                          mutate({
                            question: inquiryTitle,
                            questionDetail: inquiryContent,
                          })
                        }
                        createText='문의하기'
                      />
                    )
                  : null
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

export default InquiryCreatePage
