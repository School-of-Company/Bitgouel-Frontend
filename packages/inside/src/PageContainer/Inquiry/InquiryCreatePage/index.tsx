'use client'

import { useState } from 'react'
import * as S from './style'
import { Bg5 } from '@bitgouel/common'

const InquiryCreatePage = () => {
  const MAXLENGTH: number = 1000 as const

  const [inquiryTitle, setInquiryTitle] = useState<string>('')
  const [inquiryContent, setInquiryContent] = useState<string>('')

  const saveInquiryTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInquiryTitle(event.target.value)
  }

  const saveInquiryMainText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInquiryContent(event.target.value)
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
            placeholder='문의 제목(100자 이내)'
            maxLength={100}
            onChange={saveInquiryTitle}
          />
          <S.InputMainText
            maxLength={MAXLENGTH}
            placeholder='본문 입력 (1000자 이내)'
            onChange={saveInquiryMainText}
          />
          <S.ButtonContainer>
            <S.CreateButton
              isAble={
                inquiryTitle !== '' && inquiryContent !== '' ? true : false
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
