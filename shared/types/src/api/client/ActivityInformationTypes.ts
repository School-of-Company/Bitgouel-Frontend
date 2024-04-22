import { PageTypes } from '../common'

export interface ActivityInformationItem {
  activityId: string
  title: string
  userId: string
  activityDate: string
  username: string
}

export interface ActivityInformationTypes {
  activities: {
    content: ActivityInformationItem[]
  } & PageTypes
}
