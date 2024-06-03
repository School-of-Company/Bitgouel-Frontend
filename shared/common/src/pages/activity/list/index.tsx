'use client'

import {
  TokenManager,
  useGetActivityList,
  useGetActivityMyselfList,
  useGetStudentDetail,
} from '@bitgouel/api'
import {
  ActivityItem,
  Bg2,
  Plus,
  PrivateRouter,
  MainStyle,
} from '@bitgouel/common'
import { StudentIdProps } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as S from './style'

interface Props {
  studentIdProps: StudentIdProps
}

const ActivityListPage: React.FC<Props> = ({ studentIdProps }) => {
  const { studentId, clubId } = studentIdProps || {}
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const [isStudent, setIsStudent] = useState<boolean>(false)
  const { data: userDetail } = useGetStudentDetail(clubId, studentId)
  const { data: activityList } =
    tokenManager.authority === 'ROLE_STUDENT'
      ? useGetActivityMyselfList({
          page: 0,
          size: 10,
        })
      : useGetActivityList(studentId, { page: 0, size: 10 })

  useEffect(() => {
    setIsStudent(tokenManager.authority === 'ROLE_STUDENT')
  }, [])

  return (
    <PrivateRouter>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg2}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>
              {userDetail?.name}의 학생 활동
            </MainStyle.PageTitle>
            {isStudent && (
              <MainStyle.ButtonContainer>
                <MainStyle.SlideButton
                  onClick={() =>
                    push(
                      `/main/club/detail/${clubId}/student/detail/${studentId}/activity/create`
                    )
                  }
                >
                  <Plus />
                  <span>활동 추가</span>
                </MainStyle.SlideButton>
              </MainStyle.ButtonContainer>
            )}
          </MainStyle.BgContainer>
        </MainStyle.SlideBg>
        <MainStyle.MainWrapper>
          <MainStyle.MainContainer>
            <S.ClubListWrapper>
              {activityList?.activities.content.map((activity, index) => (
                <ActivityItem
                  item={activity}
                  key={index}
                  studentIdProps={studentIdProps}
                  activityId={activity.activityId}
                />
              ))}
            </S.ClubListWrapper>
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default ActivityListPage
