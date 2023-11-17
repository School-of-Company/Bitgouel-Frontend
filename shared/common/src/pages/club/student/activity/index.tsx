'use client'

import * as S from './style'
import Bg2 from '../../../../assets/png/mainBg2.png'
import { Plus } from '../../../../assets'
import { useRouter } from 'next/navigation'
import { ActivityItem } from '../../../../components'

const ActivityPage = () => {
  const router = useRouter()

  // const activityList = [
  //   {
  //     activityId: '1',
  //     title: ''
  //   }
  // ]

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>학생 활동</S.ClubTitle>
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
          <ActivityItem />
        </S.ActivityContainer>
      </S.ActivityWrapper>
    </div>
  )
}

export default ActivityPage
