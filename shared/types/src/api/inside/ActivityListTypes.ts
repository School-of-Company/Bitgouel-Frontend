import { ApproveStatusEnum } from '../common'

export interface ActivityListTypes {
  activityId: string //UUID
  title: string
  userId: string //UUID
  username: string
  approveStatus: ApproveStatusEnum
}
