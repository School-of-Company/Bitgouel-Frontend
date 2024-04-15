'use client'

import {
  TokenManager,
  useGetActivityList,
  useGetActivityMyselfList,
  useGetStudentDetail,
} from '@bitgouel/api'
import { ActivityItem, Bg2, Plus } from '@bitgouel/common'
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
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>{userDetail?.data.name}의 학생 활동</S.ClubTitle>
          {isStudent && (
            <S.ButtonContainer>
              <S.ClubButton
                onClick={() =>
                  push(
                    `/main/club/${clubId}/student/${studentId}/activity/create`
                  )
                }
              >
                <Plus />
                <span>활동 추가</span>
              </S.ClubButton>
            </S.ButtonContainer>
          )}
        </S.BgContainer>
      </S.SlideBg>
      <S.ActivityWrapper>
        <S.ActivityContainer>
          {activityList?.data.activities.content.map((activity, index) => (
            <ActivityItem
              item={activity}
              key={index}
              studentIdProps={studentIdProps}
              activityId={activity.activityId}
            />
          ))}
        </S.ActivityContainer>
      </S.ActivityWrapper>
    </div>
  )
}

export default ActivityListPage
