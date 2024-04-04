'use client'

import { ActivityItemTypes } from '@bitgouel/types'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import * as S from './style'

const ActivityItem: React.FC<ActivityItemTypes> = ({
  item,
  studentIdProps,
  activityId,
}) => {
  const { push } = useRouter()
  const { studentId, clubId } = studentIdProps || {}

  return (
    <S.ActivityItemWrapper
      onClick={() =>
        push(`/main/club/${clubId}/student/${studentId}/activity/${activityId}`)
      }
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
          <S.Date>
            {dayjs(item.activityDate).format('YYYY년 MM월 DD일 HH:mm')}
          </S.Date>
        </div>
        <div>
          <S.Uploader>{item.username}</S.Uploader>
        </div>
      </div>
    </S.ActivityItemWrapper>
  )
}
export default ActivityItem
