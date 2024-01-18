'use client'

import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import { Bg5, Pen, TrashCan } from '../../../assets'
import * as S from './style'
import { RejectModal } from '../../../modals'
import { useDeleteInquiryReject, useDeleteMyInquiry, useGetInquiryDetail } from '@bitgouel/api'
import { useModal } from '../../../hooks'

const InquiryDetailPage = ({ inquiryId }: { inquiryId: string }) => {
  const { push } = useRouter()
  const role = typeof window !== 'undefined' ? localStorage.getItem('Authority') as RoleEnumTypes : null
  const { data } = useGetInquiryDetail(inquiryId)
  const { mutate: inquiryReject } = useDeleteInquiryReject(inquiryId)
  const {mutate: myInquiryReject} = useDeleteMyInquiry(inquiryId)
  const { openModal } = useModal()

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의 상세</S.InquiryTitle>
          <S.TitleButtonContainer>
            <S.InquiryButton
              onClick={() => push(`/main/inquiry/modify/${inquiryId}`)}
            >
              <Pen />
              <span>문의 수정</span>
            </S.InquiryButton>
            <S.InquiryButton
              onClick={() =>
                openModal(
                  <RejectModal
                    type='문의'
                    purpose='삭제'
                    title={data?.data.question}
                    onAppropriation={() => myInquiryReject()}
                  />
                )
              }
            >
              <TrashCan />
              <span>문의 삭제</span>
            </S.InquiryButton>
          </S.TitleButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>{data?.data.question}</S.Title>
            <S.SubTitle>
              <S.ApproveStatus
                approveColor={match(data?.data.answerStatus)
                  .with('ANSWERED', () => true)
                  .otherwise(() => false)}
              >
                {data?.data.answerStatus ? '답변 완료됨' : '답변 대기 중'}
              </S.ApproveStatus>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>{`${data?.data.questionDate.slice(
                  0,
                  4
                )}년 ${data?.data.questionDate.slice(
                  5,
                  7
                )}월 ${data?.data.questionDate.slice(8, 10)}일
                  ${data?.data.questionDate.slice(
                    14,
                    16
                  )} : ${data?.data.questionDate.slice(17, 19)}
                  `}</span>
              </S.SemiTitleBox>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시자</S.SubTitleBox>
                <span>{data?.data.questioner}</span>
              </S.SemiTitleBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{data?.data.questionDetail}</S.MainText>
          <S.AnswerBox
            displayType={match(data?.data.answerStatus)
              .with('ANSWERED', () => true)
              .otherwise(() => false)}
          >
            <S.AnswerTitleBox>
              <S.AnswerTitle>문의 답변</S.AnswerTitle>
              <S.AnswerDate>{`${data?.data.answeredDate?.slice(
                0,
                4
              )}년 ${data?.data.answeredDate?.slice(
                5,
                7
              )}월 ${data?.data.answeredDate?.slice(8, 10)}일
                  ${data?.data.answeredDate?.slice(
                    13,
                    15
                  )}:${data?.data.answeredDate?.slice(16, 18)}
                  `}</S.AnswerDate>
            </S.AnswerTitleBox>
            <S.AnswerText>{data?.data.answer}</S.AnswerText>
          </S.AnswerBox>
          {role === 'ROLE_ADMIN' && (
            <S.ButtonWrapper>
              <S.ButtonContainer>
                <S.DeleteNoticeButton
                  onClick={() => (
                    <RejectModal
                      type='문의'
                      purpose='삭제'
                      title={data?.data.question}
                      onAppropriation={() => inquiryReject()}
                    />
                  )}
                >
                  삭제하기
                </S.DeleteNoticeButton>
                <S.ModifyNoticeButton>답변하기</S.ModifyNoticeButton>
              </S.ButtonContainer>
            </S.ButtonWrapper>
          )}
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default InquiryDetailPage
