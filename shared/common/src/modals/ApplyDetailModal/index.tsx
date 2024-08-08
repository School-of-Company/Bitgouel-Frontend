'use client'

import { useGetLectureApplyDetail } from '@bitgouel/api'
import { CancelIcon, insertHyphen, Portal, useModal } from '@bitgouel/common'
import * as S from './style'

interface Props {
  lectureId: string
  studentId: string
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
              <S.ContentName>{insertHyphen(data?.phoneNumber)}</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>이메일</S.ContentCaption>
              <S.ContentName>{data?.email}</S.ContentName>
            </S.ContentInfoBox>
          </S.ContentLeftWrapper>
          <S.ContentRightWrapper>
            <S.ContentInfoBox>
              <S.ContentCaption>학교</S.ContentCaption>
              <S.ContentName>{data?.school}</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>학년/반</S.ContentCaption>
              <S.ContentName>{data?.grade}학년 {data?.classNumber}반</S.ContentName>
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
