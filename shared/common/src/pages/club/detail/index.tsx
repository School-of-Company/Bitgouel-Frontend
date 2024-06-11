'use client'

import {
  TokenManager,
  useGetClubDetail,
  useGetMy,
  useGetMyClub,
} from '@bitgouel/api'
import { AuthorityContext, Bg2, MainStyle, PersonOut } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import * as S from './style'

const ClubDetailPage = ({ clubId }: { clubId?: string }) => {
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const authority = useContext(AuthorityContext)

  const { data: clubDetail } = useGetClubDetail(clubId || '', {
    enabled: authority === 'ROLE_ADMIN',
  })
  const { data: myClub } = useGetMyClub({ enabled: authority !== 'ROLE_ADMIN' })
  const { data: myData } = useGetMy()

  const [userId, setUserId] = useState<string>('')
  const [isStudent, setIsStudent] = useState<boolean>(false)

  useEffect(() => {
    setIsStudent(authority === 'ROLE_STUDENT')

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
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg2}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>취업 동아리</MainStyle.PageTitle>
          {isStudent && (
            <MainStyle.ButtonContainer>
              <MainStyle.SlideButton>
                <PersonOut />
                <span
                  onClick={() =>
                    push(`/main/club/detail/${myClub?.clubId}/student/detail/${userId}`)
                  }
                >
                  내 자격증 및 활동
                </span>
              </MainStyle.SlideButton>
            </MainStyle.ButtonContainer>
          )}
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <S.ClubName>
            {clubId ? clubDetail?.clubName : myClub?.clubName}
          </S.ClubName>
          <S.InfoContainer>
            <S.ClubInfoBox>
              <div>소속 학교</div>
              <span>
                {clubId ? clubDetail?.highSchoolName : myClub?.highSchoolName}
              </span>
            </S.ClubInfoBox>
            <S.ClubInfoBox>
              <div>담당 선생님</div>
              <span>
                {clubId ? clubDetail?.teacher.name : myClub?.teacher.name}
              </span>
            </S.ClubInfoBox>
          </S.InfoContainer>
          <S.StudentListWrapper>
            <h2>동아리 인원</h2>
            {clubId
              ? clubDetail?.students.map((student) => (
                  <S.StudentItem
                    isStudent={isStudent}
                    key={student.id}
                    onClick={() =>
                      push(`/main/club/detail/${clubId}/student/detail/${student.id}`)
                    }
                  >
                    <span>{student.name}</span>
                    <span>학생</span>
                  </S.StudentItem>
                ))
              : myClub?.students.map((student) => (
                  <S.StudentItem
                    isStudent={isStudent}
                    key={student.id}
                    onClick={() => {
                      !isStudent &&
                        push(`/main/club/detail/${clubId}/student/detail/${student.id}`)
                    }}
                  >
                    <span>{student.name}</span>
                    <span>학생</span>
                  </S.StudentItem>
                ))}
          </S.StudentListWrapper>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}
export default ClubDetailPage
