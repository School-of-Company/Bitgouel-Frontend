'use client'

import {
  useGetActivityInformationList,
  useGetActivityMyselfList,
} from '@bitgouel/api'
import { Plus } from '@bitgouel/common'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'
import { ActivityItem } from '@bitgouel/common/src/components'
import { useRouter } from 'next/navigation'
import * as S from './style'

const ActivityListPage = () => {
  const router = useRouter()

  const role = 'student'

  const { data } = useGetActivityMyselfList({
    page: 1,
    size: 5,
  }) //학생 조회

  const { data: adminData } = useGetActivityInformationList({
    page: 1,
    size: 4,
  }) // admin 조회

  console.log(data)
  console.log(adminData)

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>(학생이름)의 학생 활동</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton
              onClick={() => router.push('/main/club/student/activity/create')}
            >
              <Plus />
              <span>활동 추가</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>

      <S.ActivityWrapper>
        <S.ActivityContainer>
          {role === 'student'
            ? data?.data.activities.content.map((activity) => (
                <ActivityItem item={activity} key={activity.activityId} />
              ))
            : adminData?.data.activities.content.map((activity) => (
                <ActivityItem item={activity} key={activity.activityId} />
              ))}
        </S.ActivityContainer>
      </S.ActivityWrapper>
    </div>
  )
}

export default ActivityListPage
