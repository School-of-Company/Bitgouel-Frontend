import { ActivityInformationItem } from '../api'
import { StudentIdProps } from './StudentIdProps'

export interface ActivityItemTypes {
  item: ActivityInformationItem
  studentIdProps: StudentIdProps
  activityId: string
}
