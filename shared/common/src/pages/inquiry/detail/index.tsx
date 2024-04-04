'use client'

import {
  useDeleteInquiryReject,
  useDeleteMyInquiry,
  useGetInquiryDetail,
} from '@bitgouel/api'
import {
  AppropriationModal,
  Bg5,
  InquiryAnswerModal,
  Pen,
  TrashCan,
  useModal,
} from '@bitgouel/common'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import * as S from './style'

const InquiryDetailPage = ({
  inquiryId,
  isAdmin,
}: {
  inquiryId: string
  isAdmin: boolean
}) => {
  const { push } = useRouter()
  const { mutate: inquiryReject } = useDeleteInquiryReject(inquiryId)
  const { mutate: myInquiryReject } = useDeleteMyInquiry(inquiryId)
  const { openModal } = useModal()
  const { data: inquiryDetail } = useGetInquiryDetail(inquiryId)
  const {
    question,
    questionDetail,
    questionDate,
    questioner,
    answerStatus,
    answeredDate,
    answer,
  } = inquiryDetail?.data || {}

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의 상세</S.InquiryTitle>
          {!isAdmin && (
            <S.TitleButtonContainer>
              <S.InquiryButton
                onClick={() => push(`/main/post/inquiry/${inquiryId}/modify`)}
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
                      title={question || ''}
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
            <S.Title>{question}</S.Title>
            <S.SubTitle>
              <S.ApproveStatus
                approveColor={match(answerStatus || '')
                  .with('ANSWERED', () => true)
                  .otherwise(() => false)}
              >
                {answerStatus === 'ANSWERED' ? '답변 완료됨' : '답변 대기 중'}
              </S.ApproveStatus>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>{dayjs(questionDate).format('YYYY년 MM월 DD일 HH:mm:dd')}</span>
              </S.SemiTitleBox>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시자</S.SubTitleBox>
                <span>{questioner}</span>
              </S.SemiTitleBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{questionDetail}</S.MainText>
          <S.AnswerBox
            displayType={match(answerStatus || '')
              .with('ANSWERED', () => true)
              .otherwise(() => false)}
          >
            <S.AnswerTitleBox>
              <S.AnswerTitle>문의 답변</S.AnswerTitle>
              <S.AnswerDate>{dayjs(answeredDate).format('YYYY년 MM월 DD일 HH:mm:dd')}</S.AnswerDate>
            </S.AnswerTitleBox>
            <S.AnswerText>{answer}</S.AnswerText>
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
                        title={question || ''}
                        onAppropriation={() => inquiryReject()}
                      />
                    )
                  }
                >
                  삭제하기
                </S.DeleteInquiryButton>
                <S.AnswerInquiryButton
                  onClick={() =>
                    openModal(<InquiryAnswerModal inquiryId={inquiryId} />)
                  }
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
