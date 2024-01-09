'use client'

import * as S from './style'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'
import { useRouter } from 'next/navigation'

const ClubPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.Title>취업 동아리</S.Title>
        </S.BgContainer>
      </S.SlideBg>
      <S.ClubWrapper>
        <S.ClubContainer>
          <S.ClubTitle>dev GSM</S.ClubTitle>
          <S.ClubInfoContainer>
            <S.BelongBox>
              <S.ExpressSchoolBox>소속 학교</S.ExpressSchoolBox>
              <span>광주소프트웨어마이스터고</span>
            </S.BelongBox>
            <S.BelongBox>
              <S.ExpressTeacherBox>담당 선생님</S.ExpressTeacherBox>
              <span>홍길동</span>
            </S.BelongBox>
          </S.ClubInfoContainer>
          <S.ClubPersonnelBox>
            <S.ClubPersonnelTitle>동아리 인원</S.ClubPersonnelTitle>
            <span>총 44명</span>
          </S.ClubPersonnelBox>
          <S.ClubMemberListContainer>
            <S.ClubMemberBox>
              <S.MemberName>이운린</S.MemberName>
              <S.MemberRole>학생</S.MemberRole>
            </S.ClubMemberBox>
            <S.ClubMemberBox>
              <S.MemberName>이운린</S.MemberName>
              <S.MemberRole>학생</S.MemberRole>
            </S.ClubMemberBox>
            <S.ClubMemberBox>
              <S.MemberName>이운린</S.MemberName>
              <S.MemberRole>학생</S.MemberRole>
            </S.ClubMemberBox>
            <S.ClubMemberBox>
              <S.MemberName>이운린</S.MemberName>
              <S.MemberRole>학생</S.MemberRole>
            </S.ClubMemberBox>
            <S.ClubMemberBox>
              <S.MemberName>이운린</S.MemberName>
              <S.MemberRole>학생</S.MemberRole>
            </S.ClubMemberBox>
          </S.ClubMemberListContainer>
        </S.ClubContainer>
      </S.ClubWrapper>
    </div>
  )
}

export default ClubPage
