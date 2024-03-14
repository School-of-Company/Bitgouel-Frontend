import { ApproveStatusEnum } from '../common'

interface ActivityInformationItem {
  activityId: string
  title: string
  userId: string
  username: string
  approveStatus: ApproveStatusEnum
}

export interface ActivityInformationTypes {
  activities: {
    content: ActivityInformationItem[]
  }
}
