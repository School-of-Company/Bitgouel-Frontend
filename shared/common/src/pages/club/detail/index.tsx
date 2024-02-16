'use client'

import { TokenManager, useGetClubDetail, useGetMyClub } from '@bitgouel/api'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Bg2, PersonOut } from '../../../assets'
import { roleToKor } from '../../../constants'
import * as S from './style'

const ClubDetailPage = ({ clubId }: { clubId?: string }) => {
  const { push } = useRouter()
  const { data: clubDetail } = useGetClubDetail(clubId || '')
  const { data: myClub } = useGetMyClub()
  const tokenManager = new TokenManager()
  const [isStudent, setIsStudent] = useState<boolean>(false)

  useEffect(() => {
    if (tokenManager.authority === 'ROLE_STUDENT') setIsStudent(true)
  }, [])

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.Title>취업 동아리</S.Title>
          {isStudent && (
            <S.ButtonContainer>
              <S.ClubButton>
                <PersonOut />
                <span>내 자격증 및 활동</span>
              </S.ClubButton>
            </S.ButtonContainer>
          )}
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
                    isStudent={false}
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
                    isStudent={isStudent}
                    key={student.id}
                    onClick={() =>
                      !isStudent &&
                      push(
                        `/main/club/${myClub?.data.clubId}/student/${student.id}`
                      )
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
