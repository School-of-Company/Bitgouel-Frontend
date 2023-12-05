import { ApproveStatusEnum } from '../common'

export interface ActivityInformationListTypes {
  activityId: string
  title: string
  userId: string
  username: string
  approveStatus: ApproveStatusEnum
}

export interface ActivityInformationResponseTypes {
  activities: {
    content: ActivityInformationListTypes[]
  }
}
