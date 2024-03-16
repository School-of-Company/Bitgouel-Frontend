import { ApproveStatusEnum } from '../api'

export interface ActivityItemType {
  activityId: string
  title: string
  userId: string
  activityDate: string
  username: string
  approveStatus: ApproveStatusEnum
}

export interface ActivityItemProps {
  item: ActivityItemType
}
