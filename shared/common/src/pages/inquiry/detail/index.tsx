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
  MainStyle,
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
  const { data } = useGetInquiryDetail(inquiryId)

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg5}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>문의 상세</MainStyle.PageTitle>
          {!isAdmin && (
            <MainStyle.ButtonContainer>
              <MainStyle.SlideButton
                onClick={() => push(`/main/post/inquiry/detail/${inquiryId}/modify`)}
              >
                <Pen />
                <span>문의 수정</span>
              </MainStyle.SlideButton>
              <MainStyle.SlideButton
                onClick={() =>
                  openModal(
                    <AppropriationModal
                      isApprove={false}
                      question='문의를 삭제하시겠습니까?'
                      purpose='삭제하기'
                      title={data?.question || ''}
                      onAppropriation={() => myInquiryReject()}
                    />
                  )
                }
              >
                <TrashCan />
                <span>문의 삭제</span>
              </MainStyle.SlideButton>
            </MainStyle.ButtonContainer>
          )}
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <S.TitleContainer>
            <S.Title>{data?.question}</S.Title>
            <S.SubTitle>
              <S.ApproveStatus
                approveColor={match(data?.answerStatus || '')
                  .with('ANSWERED', () => true)
                  .otherwise(() => false)}
              >
                {data?.answerStatus === 'ANSWERED'
                  ? '답변 완료됨'
                  : '답변 대기 중'}
              </S.ApproveStatus>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>
                  {dayjs(data?.answeredDate).format(
                    'YYYY년 MM월 DD일 HH:mm:dd'
                  )}
                </span>
              </S.SemiTitleBox>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시자</S.SubTitleBox>
                <span>{data?.questioner}</span>
              </S.SemiTitleBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{data?.questionDetail}</S.MainText>
          <S.AnswerBox
            displayType={match(data?.answerStatus || '')
              .with('ANSWERED', () => true)
              .otherwise(() => false)}
          >
            <S.AnswerTitleBox>
              <S.AnswerTitle>문의 답변</S.AnswerTitle>
              <S.AnswerDate>
                {dayjs(data?.answeredDate).format('YYYY년 MM월 DD일 HH:mm:dd')}
              </S.AnswerDate>
            </S.AnswerTitleBox>
            <S.AnswerText>{data?.answer}</S.AnswerText>
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
                        title={data?.question || ''}
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
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default InquiryDetailPage
