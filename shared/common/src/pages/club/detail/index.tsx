'use client'

import {
  TokenManager,
  useGetClubDetail,
  useGetMy,
  useGetMyClub,
} from '@bitgouel/api'
import { Bg2, PersonOut } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as S from './style'

const ClubDetailPage = ({ clubId }: { clubId?: string }) => {
  const { push } = useRouter()
  const tokenManager = new TokenManager()

  const { data: clubDetail } = useGetClubDetail(clubId || '', {
    enabled: !!clubId,
  })
  const { data: myClub } = useGetMyClub({ enabled: !clubId })
  const { data: myData } = useGetMy()

  const [userId, setUserId] = useState<string>('')
  const [isStudent, setIsStudent] = useState<boolean>(false)

  useEffect(() => {
    setIsStudent(tokenManager.authority === 'ROLE_STUDENT')

    if (myClub && myData) {
      const foundStudent = myClub.students.find(
        (student) => student.userId === myData.id
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
                    push(`/main/club/${myClub?.clubId}/student/${userId}`)
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
            {clubId ? clubDetail?.clubName : myClub?.clubName}
          </S.ClubTitle>
          <S.ClubInfoContainer>
            <S.BelongBox>
              <S.ExpressSchoolBox>소속 학교</S.ExpressSchoolBox>
              <span>
                {clubId ? clubDetail?.highSchoolName : myClub?.highSchoolName}
              </span>
            </S.BelongBox>
            <S.BelongBox>
              <S.ExpressTeacherBox>담당 선생님</S.ExpressTeacherBox>
              <span>
                {clubId ? clubDetail?.teacher.name : myClub?.teacher.name}
              </span>
            </S.BelongBox>
          </S.ClubInfoContainer>
          <S.ClubPersonnelBox>
            <S.ClubPersonnelTitle>동아리 인원</S.ClubPersonnelTitle>
            <span>
              총 {clubId ? clubDetail?.headCount : myClub?.headCount}명
            </span>
          </S.ClubPersonnelBox>
          <S.ClubMemberListContainer>
            {clubId
              ? clubDetail?.students.map((student) => (
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
              : myClub?.students.map((student) => (
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
