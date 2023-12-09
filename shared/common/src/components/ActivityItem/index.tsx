'use client'

import {
  ActivityItemProps,
  ActivityInformationListTypes,
  ActivityItemType,
} from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import { lectureStatusToKor } from '../../constants'

import * as S from './style'

const ActivityItem = ({ item }: ActivityItemProps) => {
  const { push } = useRouter()

  return (
    <S.ActivityItemWrapper
      onClick={() =>
        push(`/main/club/student/activity/${item.activityId}/detail`)
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
          <S.Date>{`${item.activityDate.slice(
            0,
            4
          )}년 ${item.activityDate.slice(5, 7)}월 ${item.activityDate.slice(
            8,
            10
          )}일 ${item.activityDate.slice(11, 16)}`}</S.Date>
        </div>
        <div>
          <S.Uploader>{item.userName}</S.Uploader>
        </div>
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
