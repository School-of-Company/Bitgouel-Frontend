'use client'

import { ActivityItemProps } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import * as S from './style'

const ActivityItem = ({ item }: ActivityItemProps) => {
  const router = useRouter()

  return (
    <S.ActivityItemWrapper
      onClick={() => router.push('/main/club/student/activity/detail')}
    >
      <div>
        <div>
          <S.ActivityTitle>
            {item.title.length > 10
              ? `${item.title.slice(0, 12)}...`
              : item.title}
          </S.ActivityTitle>
        </div>
        <div>
          <S.Date>{`${item.activityDate.slice(
            0,
            4
          )}년 ${item.activityDate.slice(5, 7)}월 ${item.activityDate.slice(
            8,
            10
          )}일 ${item.activityDate.slice(11, 16)}`}</S.Date>
        </div>
        <div>
          <S.Uploader>{item.username}</S.Uploader>
        </div>
      </div>
    </S.ActivityItemWrapper>
  )
}
export default ActivityItem
