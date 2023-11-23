import { ApproveStatusEnum } from '../common'

interface ActivityMyselfItem {
  activityId: string
  title: string
  userId: string
  username: string
  approveStatus: ApproveStatusEnum
}

export interface ActivityMyselfTypes {
  activities: {
    content: ActivityMyselfItem[]
  }
}
