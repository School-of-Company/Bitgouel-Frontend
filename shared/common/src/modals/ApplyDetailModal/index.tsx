'use client'

import * as S from './style'
import { CancelIcon, Portal, useModal } from '@bitgouel/common'

interface Props {
  lectureId: string
  studentId: string
}

const ApplyDetailModal = ({ lectureId, studentId }: Props) => {
  const { closeModal } = useModal()

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
              <S.ContentName>파티피플공명</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>전화번호</S.ContentCaption>
              <S.ContentName>010-1234-5678</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>이메일</S.ContentCaption>
              <S.ContentName>bitgouel@gmail.com</S.ContentName>
            </S.ContentInfoBox>
          </S.ContentLeftWrapper>
          <S.ContentRightWrapper>
            <S.ContentInfoBox>
              <S.ContentCaption>학교</S.ContentCaption>
              <S.ContentName>광주소프트웨어마이스터고등학교</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>학년/반</S.ContentCaption>
              <S.ContentName>3학년 4반</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>동아리</S.ContentCaption>
              <S.ContentName>나의 미래는 내가 주인공이다!</S.ContentName>
            </S.ContentInfoBox>
            <S.ContentInfoBox>
              <S.ContentCaption>기수</S.ContentCaption>
              <S.ContentName>1기</S.ContentName>
            </S.ContentInfoBox>
          </S.ContentRightWrapper>
        </S.ContentWrapper>
      </S.ApplyDetailModalWrapper>
    </Portal>
  )
}

export default ApplyDetailModal
