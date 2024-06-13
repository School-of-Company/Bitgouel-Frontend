'use client'

import {
  useGetActivityList,
  useGetActivityMyselfList,
  useGetStudentDetail,
} from '@bitgouel/api'
import {
  ActivityItem,
  AuthorityContext,
  Bg2,
  MainStyle,
  NoneResult,
  Plus,
  PrivateRouter,
  WaitingAnimation,
} from '@bitgouel/common'
import { StudentIdProps } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import * as S from './style'

interface Props {
  studentIdProps: StudentIdProps
}

const ActivityListPage: React.FC<Props> = ({ studentIdProps }) => {
  const { studentId, clubId } = studentIdProps || {}
  const { push } = useRouter()
  const authority = useContext(AuthorityContext)
  const { data: userDetail } = useGetStudentDetail(clubId, studentId)
  const { data: activityList, isLoading } =
    authority === 'ROLE_STUDENT'
      ? useGetActivityMyselfList({
          page: 0,
          size: 10,
        })
      : useGetActivityList(studentId, { page: 0, size: 10 })

  return (
    <PrivateRouter>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg2}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>
              {userDetail?.name}의 학생 활동
            </MainStyle.PageTitle>
            {authority === 'ROLE_STUDENT' && (
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
              {isLoading && <WaitingAnimation isLoadingTitle={'학생 활동을'} />}
              {activityList?.activities.content &&
              activityList.activities.content.length <= 0 ? (
                <NoneResult notDataTitle={'학생 활동이'} />
              ) : (
                activityList?.activities.content.map((activity, index) => (
                  <ActivityItem
                    item={activity}
                    key={index}
                    studentIdProps={studentIdProps}
                    activityId={activity.activityId}
                  />
                ))
              )}
            </S.ClubListWrapper>
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default ActivityListPage
