'use client'

import { Bg5, Pen, TrashCan } from '@bitgouel/common'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'

const InquiryDetailPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의 상세</S.InquiryTitle>
          <S.TitleButtonContainer>
            <S.InquiryButton
              onClick={() => push('/main/inquiry/detail/modify')}
            >
              <Pen />
              <span>문의 수정</span>
            </S.InquiryButton>
            <S.InquiryButton>
              <TrashCan />
              <span>문의 삭제</span>
            </S.InquiryButton>
          </S.TitleButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>문의가 문의문의해서 문의문의한 게 문의문의해요</S.Title>
            <S.SubTitle>
              <S.ApproveStatus
                approveColor={match('APPROVED')
                  .with('APPROVED', () => true)
                  .otherwise(() => false)}
              >
                답변 완료됨
              </S.ApproveStatus>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>2023년 11월 11일 12:34</span>
              </S.SemiTitleBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>문 의</S.MainText>
          <S.AnswerBox
            displayType={match('APPROVED')
              .with('APPROVED', () => true)
              .otherwise(() => false)}
          >
            <S.AnswerTitleBox>
              <S.AnswerTitle>문의 답변</S.AnswerTitle>
              <S.AnswerDate>2024년 01월 16일 21:43</S.AnswerDate>
            </S.AnswerTitleBox>
            <S.AnswerText>의 문</S.AnswerText>
          </S.AnswerBox>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default InquiryDetailPage