'use client'

import { Bg2, Plus } from '../../../assets'
import * as S from './style'
import { useRouter } from 'next/navigation'
import {
  TokenManager,
  useGetActivityList,
  useGetActivityMyselfList,
  useGetMy,
} from '@bitgouel/api'
import { StudentIdProps } from '@bitgouel/types'
import { useEffect, useState } from 'react'
import ActivityItem from '../../../components/ActivityItem'

const ActivityListPage: React.FC<{ studentIdProps: StudentIdProps }> = ({
  studentIdProps,
}) => {
  const { studentId, clubId } = studentIdProps

  const { push } = useRouter()

  const tokenManager = new TokenManager()

  const [isStudent, setIsStudent] = useState<boolean>(false)

  const { data: userDetail } = useGetMy()

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
