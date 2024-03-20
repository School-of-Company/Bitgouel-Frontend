'use client'

import { TokenManager, useGetClubDetail, useGetMyClub } from '@bitgouel/api'
import { Bg2, PersonOut, roleToKor } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as S from './style'

const ClubDetailPage = ({ clubId }: { clubId?: string }) => {
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const { data: clubs } =
    tokenManager.authority === 'ROLE_ADMIN'
      ? useGetClubDetail(clubId || '')
      : useGetMyClub()
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
              <S.ClubButton onClick={() => push(`/main/club/student/my`)}>
                <PersonOut />
                <span>내 자격증 및 활동</span>
              </S.ClubButton>
            </S.ButtonContainer>
          )}
        </S.BgContainer>
      </S.SlideBg>
      <S.ClubWrapper>
        <S.ClubContainer>
          <S.ClubTitle>{clubs?.data.clubName}</S.ClubTitle>
          <S.ClubInfoContainer>
            <S.BelongBox>
              <S.ExpressSchoolBox>소속 학교</S.ExpressSchoolBox>
              <span>{clubs?.data.highSchoolName}</span>
            </S.BelongBox>
            <S.BelongBox>
              <S.ExpressTeacherBox>담당 선생님</S.ExpressTeacherBox>
              <span>{clubs?.data.teacher.name}</span>
            </S.BelongBox>
          </S.ClubInfoContainer>
          <S.ClubPersonnelBox>
            <S.ClubPersonnelTitle>동아리 인원</S.ClubPersonnelTitle>
            <span>총 {clubs?.data.headCount}명</span>
          </S.ClubPersonnelBox>
          <S.ClubMemberListContainer>
            {clubs?.data.students.map((student) => (
              <S.ClubMemberBox
                isStudent={isStudent}
                key={student.id}
                onClick={() =>
                  !isStudent &&
                  push(`/main/club/${clubs?.data.clubId}/student/${student.id}`)
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
