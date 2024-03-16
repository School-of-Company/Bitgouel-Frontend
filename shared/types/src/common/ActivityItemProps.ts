import { ApproveStatusEnum } from '../api'

export interface ActivityItemType {
  activityId: string
  title: string
  userId: string
  activityDate: string
  username: string
}

export interface ActivityItemProps {
  item: ActivityItemType
}
