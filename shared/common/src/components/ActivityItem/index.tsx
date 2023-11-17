'use client'

import * as S from './style'
import { useRouter } from 'next/navigation'
import { ApproveStatusEnum } from '@api/common'
import { lectureStatusToKor } from '../../constants'
import { match } from 'ts-pattern'

interface ActivityItemType {
  activityId: string
  title: string
  userId: string
  userName: string
  approveStatus: ApproveStatusEnum
}

interface ActivityItemProps {
  item: ActivityItemType
}

const ActivityItem = ({ item }: ActivityItemProps) => {
  const router = useRouter()

  return (
    <S.ActivityItemWrapper
      onClick={() => router.push('/main/club/student/activity/detail')}
    >
      <div>
        <div>
          <S.AcitivTitle>
            {item.title.length > 10
              ? `${item.title.slice(0, 13)}...`
              : item.title}
          </S.AcitivTitle>
        </div>
        <S.Uploader>{item.userName}</S.Uploader>
      </div>
      <S.StatusContainer>
        <S.ApproveStatus
          approveColor={match(item.approveStatus)
            .with('APPROVED', () => true)
            .otherwise(() => false)}
        >
          {lectureStatusToKor[item.approveStatus]}
        </S.ApproveStatus>
      </S.StatusContainer>
    </S.ActivityItemWrapper>
  )
}
export default ActivityItem
