import { LectureSemesterEnum, LectureTypeEnum } from '../common'

export type LectureStatusEnum = 'OPENED' | 'CLOSED'

export interface LectureItemType {
  id: string
  name: string
  content: string
  semester: LectureSemesterEnum
  division: string
  department: string
  line: string
  startDate: string
  endDate: string
  lectureType: LectureTypeEnum
  lectureStatus: LectureStatusEnum
  headCount: number
  maxRegisteredUser: number
  lecturer: string
  userId: string
  essentialComplete: boolean
}
