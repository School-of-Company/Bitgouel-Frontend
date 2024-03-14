'use client'

import {
  TokenManager,
  useDeleteInquiryReject,
  useDeleteMyInquiry,
  useGetInquiryDetail,
} from '@bitgouel/api'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import { Bg5, Pen, TrashCan } from '../../../assets'
import { useModal } from '../../../hooks'
import { AppropriationModal, InquiryAnswerModal } from '../../../modals'
import * as S from './style'

const InquiryDetailPage = ({
  inquiryId,
  isAdmin,
}: {
  inquiryId: string
  isAdmin: boolean
}) => {
  const { push } = useRouter()
  const { data } = useGetInquiryDetail(inquiryId)
  const { mutate: inquiryReject } = useDeleteInquiryReject(inquiryId)
  const { mutate: myInquiryReject } = useDeleteMyInquiry(inquiryId)
  const { openModal } = useModal()

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의 상세</S.InquiryTitle>
          {!isAdmin && (
            <S.TitleButtonContainer>
              <S.InquiryButton
                onClick={() => push(`/main/post/inquiry/modify/${inquiryId}`)}
              >
                <Pen />
                <span>문의 수정</span>
              </S.InquiryButton>
              <S.InquiryButton
                onClick={() =>
                  openModal(
                    <AppropriationModal
                      isApprove={false}
                      question='문의를 삭제하시겠습니까?'
                      purpose='삭제하기'
                      title={data?.data.question as ''}
                      onAppropriation={() => myInquiryReject()}
                    />
                  )
                }
              >
                <TrashCan />
                <span>문의 삭제</span>
              </S.InquiryButton>
            </S.TitleButtonContainer>
          )}
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
                {data?.data.answerStatus === 'ANSWERED'
                  ? '답변 완료됨'
                  : '답변 대기 중'}
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
          {isAdmin && (
            <S.ButtonWrapper>
              <S.ButtonContainer>
                <S.DeleteInquiryButton
                  onClick={() =>
                    openModal(
                      <AppropriationModal
                        isApprove={false}
                        question='문의를 삭제하시겠습니까?'
                        purpose='삭제하기'
                        title={data?.data.question as ''}
                        onAppropriation={() => inquiryReject()}
                      />
                    )
                  }
                >
                  삭제하기
                </S.DeleteInquiryButton>
                <S.AnswerInquiryButton
                  onClick={() => openModal(<InquiryAnswerModal inquiryId={inquiryId} />)}
                >
                  답변하기
                </S.AnswerInquiryButton>
              </S.ButtonContainer>
            </S.ButtonWrapper>
          )}
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default InquiryDetailPage
