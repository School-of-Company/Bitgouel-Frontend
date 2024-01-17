'use client'

import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import { Bg5 } from '../../../assets'
import * as S from './style'

const InquiryDetailPage = () => {
  const { push } = useRouter()
  const role = localStorage.getItem("Authority") as RoleEnumTypes

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의 상세</S.InquiryTitle>
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
              <S.SemiTitleBox>
                <S.SubTitleBox>게시자</S.SubTitleBox>
                <span>홍길동</span>
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
          {role === 'ROLE_ADMIN' && (
            <S.ButtonWrapper>
              <S.ButtonContainer>
                <S.DeleteNoticeButton>삭제하기</S.DeleteNoticeButton>
                <S.ModifyNoticeButton
                  onClick={() => push(`/main/inquiry/answer`)}
                >
                  답변하기
                </S.ModifyNoticeButton>
              </S.ButtonContainer>
            </S.ButtonWrapper>
          )}
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default InquiryDetailPage
