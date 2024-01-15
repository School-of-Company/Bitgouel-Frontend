'use client'

import { useGetClubDetail, useGetMyClub } from '@bitgouel/api'
import * as S from './style'
import { Bg2 } from '../../../assets'
import { useRouter } from 'next/navigation'
import { roleToKor } from '../../../constants'

const ClubDetailPage = ({ clubId }: { clubId?: string }) => {
  const { push } = useRouter()

  const { data: clubDetail } = useGetClubDetail(clubId || '')
  const { data: myClub } = useGetMyClub()

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.Title>취업 동아리</S.Title>
        </S.BgContainer>
      </S.SlideBg>
      <S.ClubWrapper>
        <S.ClubContainer>
          <S.ClubTitle>
            {clubId ? clubDetail?.data.clubName : myClub?.data.clubName}
          </S.ClubTitle>
          <S.ClubInfoContainer>
            <S.BelongBox>
              <S.ExpressSchoolBox>소속 학교</S.ExpressSchoolBox>
              <span>
                {clubId
                  ? clubDetail?.data.highSchoolName
                  : myClub?.data.highSchoolName}
              </span>
            </S.BelongBox>
            <S.BelongBox>
              <S.ExpressTeacherBox>담당 선생님</S.ExpressTeacherBox>
              <span>
                {clubId
                  ? clubDetail?.data.teacher.name
                  : myClub?.data.teacher.name}
              </span>
            </S.BelongBox>
          </S.ClubInfoContainer>
          <S.ClubPersonnelBox>
            <S.ClubPersonnelTitle>동아리 인원</S.ClubPersonnelTitle>
            <span>
              총 {clubId ? clubDetail?.data.headCount : myClub?.data.headCount}
              명
            </span>
          </S.ClubPersonnelBox>
          <S.ClubMemberListContainer>
            {clubId
              ? clubDetail?.data.students.map((student) => (
                  <S.ClubMemberBox
                    key={student.id}
                    onClick={() =>
                      push(`/main/club/${clubId}/student/${student.id}`)
                    }
                  >
                    <S.MemberName>{student.name}</S.MemberName>
                    <S.MemberRole>{roleToKor[student.authority]}</S.MemberRole>
                  </S.ClubMemberBox>
                ))
              : myClub?.data.students.map((student) => (
                  <S.ClubMemberBox
                    key={student.id}
                    onClick={() =>
                      push(`/main/club/${clubId}/student/${student.id}`)
                    }
                  >
                    <S.MemberName>{student.name}</S.MemberName>
                    <S.MemberRole>{roleToKor[student.authority]}</S.MemberRole>
                  </S.ClubMemberBox>
                ))}
          </S.ClubMemberListContainer>
        </S.ClubContainer>
      </S.ClubWrapper>
    </div>
  )
}

export default ClubDetailPage
