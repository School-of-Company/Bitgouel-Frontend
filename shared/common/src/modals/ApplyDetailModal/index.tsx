'use client'

import { CompleteStatus, useGetLectureApplyDetail } from '@bitgouel/api'
import { CancelIcon, insertHyphen, Portal, useModal } from '@bitgouel/common'
import * as S from './style'
import dayjs from 'dayjs'

interface Props {
  lectureId: string
  studentId: string
}

const CompleteStatusToGrade: Record<
  Exclude<CompleteStatus, 'NOT_COMPLETED_YET'>,
  1 | 2 | 3
> = {
  COMPLETED_IN_1RD: 1,
  COMPLETED_IN_2RD: 2,
  COMPLETED_IN_3RD: 3,
}

const ApplyDetailModal = ({ lectureId, studentId }: Props) => {
  const { closeModal } = useModal()
  const { data } = useGetLectureApplyDetail(lectureId, studentId)

  return (
    <Portal onClose={closeModal}>
      <S.ApplyDetailModalWrapper>
        <S.TitleContainer>
          <S.Title>학생 상세 정보</S.Title>
          <CancelIcon onClick={closeModal} />
        </S.TitleContainer>
        <S.ContentWrapper>
          <S.ContentLeftWrapper>
            <S.ContentInfoBox>
              <S.ContentCaption>이름</S.ContentCaption>
              <S.ContentName>{data?.name}</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>전화번호</S.ContentCaption>
              <S.ContentName>
                {insertHyphen(data?.phoneNumber || '')}
              </S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>이메일</S.ContentCaption>
              <S.ContentName>{data?.email}</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>강의 이수</S.ContentCaption>
              {data?.completeStatus === 'NOT_COMPLETED_YET' && (
                <S.CompleteText isComplete={false}>미완료</S.CompleteText>
              )}
              {data?.completeStatus !== 'NOT_COMPLETED_YET' && (
                <S.CompleteTextBox>
                  <S.CompleteText isComplete={true}>완료</S.CompleteText>
                  <S.CompleteDateText>
                    {dayjs(data?.currentCompletedDate).format('YYYY.MM.DD')} (
                    {CompleteStatusToGrade[data?.completeStatus]}학년)
                  </S.CompleteDateText>
                </S.CompleteTextBox>
              )}
            </S.ContentInfoBox>
          </S.ContentLeftWrapper>
          <S.ContentRightWrapper>
            <S.ContentInfoBox>
              <S.ContentCaption>학교</S.ContentCaption>
              <S.ContentName>{data?.school}</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>학년/반</S.ContentCaption>
              <S.ContentName>
                {data?.grade}학년 {data?.classNumber}반
              </S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>동아리</S.ContentCaption>
              <S.ContentName>{data?.clubName}</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>기수</S.ContentCaption>
              <S.ContentName>{data?.cohort}기</S.ContentName>
            </S.ContentInfoBox>
          </S.ContentRightWrapper>
        </S.ContentWrapper>
      </S.ApplyDetailModalWrapper>
    </Portal>
  )
}

export default ApplyDetailModal
