'use client'

import * as S from './style'
import { Bg2 } from '@bitgouel/common'
import { Plus } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { ActivityItem } from '@bitgouel/common/src/components'
import { ApproveStatusEnum } from '@bitgouel/types'

// 아래 예시인 activityList의 타입인데 어차피 통신으로 값을
// 갖고 올거니 지워주세요 작업할 때
interface ActivityItemType {
  activityId: string
  title: string
  userId: string
  activityDate: string
  userName: string
  approveStatus: ApproveStatusEnum
}

const ActivityListPage = () => {
  const { push } = useRouter()

  const activityList: ActivityItemType[] = [
    {
      activityId: '1',
      title:
        '국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.',
      userId: 'sdfsf',
      activityDate: '2023-12-13',
      userName: '박주홍',
      approveStatus: 'APPROVED',
    },
    {
      activityId: '2',
      title:
        '국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.',
      userId: 'sdfsf',
      activityDate: '2023-12-13',
      userName: '박주홍',
      approveStatus: 'APPROVED',
    },
    {
      activityId: '3',
      title:
        '국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.',
      userId: 'sdfsf',
      activityDate: '2023-12-13',
      userName: '박주홍',
      approveStatus: 'APPROVED',
    },
  ]

  return (
    <div>
      <S.SlideBg url={ Bg2 }>
        <S.BgContainer>
          <S.ClubTitle>(학생이름)의 학생 활동</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton
              onClick={() => push('/main/club/student/activity/create')}
            >
              <Plus />
              <span>활동 추가</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>

      <S.ActivityWrapper>
        <S.ActivityContainer>
          {activityList.map((activity) => (
            <ActivityItem item={activity} key={activity.activityId} />
          ))}
        </S.ActivityContainer>
      </S.ActivityWrapper>
    </div>
  )
}

export default ActivityListPage
