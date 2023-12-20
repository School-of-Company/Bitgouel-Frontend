import { ActivityInformationListTypes, ApproveStatusEnum } from '../api'

export interface ActivityItemType extends ActivityInformationListTypes {
  activityDate: string
}

export interface ActivityItemProps {
  item: ActivityItemType
}
