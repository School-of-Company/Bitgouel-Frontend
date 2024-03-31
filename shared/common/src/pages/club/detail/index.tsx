'use client'

import {
  TokenManager,
  useGetClubDetail,
  useGetMy,
  useGetMyClub,
} from '@bitgouel/api'
import * as S from './style'
import { Bg2, PersonOut } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { roleToKor } from '@bitgouel/common'
import { useEffect, useState } from 'react'

const ClubDetailPage = ({ clubId }: { clubId?: string }) => {
  const { push } = useRouter()

  const { data: clubDetail } = useGetClubDetail(clubId || '', {
    enabled: !!clubId,
  })
  const { data: myClub } = useGetMyClub({ enabled: !clubId })
  const { data: myData } = useGetMy()

  const [userId, setUserId] = useState<string>('')

  const tokenManager = new TokenManager()

  const [isStudent, setIsStudent] = useState<boolean>(false)

  useEffect(() => {
    setIsStudent(tokenManager.authority === 'ROLE_STUDENT')

    if (myClub && myData) {
      const foundStudent = myClub.data.students.find(
        (student) => student.userId === myData.data.id
      )
      if (foundStudent) {
        setUserId(foundStudent.id)
      }
    }
  }, [myClub, myData])

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.Title>취업 동아리</S.Title>
          {isStudent && (
            <S.ButtonContainer>
              <S.ClubButton>
                <PersonOut />
                <span
                  onClick={() =>
                    push(`/main/club/${myClub?.data.clubId}/student/${userId}`)
                  }
                >
                  내 자격증 및 활동
                </span>
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
                    isStudent={isStudent}
                    key={student.id}
                    onClick={() =>
                      push(`/main/club/${clubId}/student/${student.id}`)
                    }
                  >
                    <S.MemberName>{student.name}</S.MemberName>
                  </S.ClubMemberBox>
                ))
              : myClub?.data.students.map((student) => (
                  <S.ClubMemberBox
                    isStudent={isStudent}
                    key={student.id}
                    onClick={() => {
                      !isStudent &&
                        push(`/main/club/${clubId}/student/${student.id}`)
                    }}
                  >
                    <S.MemberName>{student.name}</S.MemberName>
                  </S.ClubMemberBox>
                ))}
          </S.ClubMemberListContainer>
        </S.ClubContainer>
      </S.ClubWrapper>
    </div>
  )
}
export default ClubDetailPage
