import { LectureDate, LectureDivisionEnum, LectureSemesterEnum, LectureTypeEnum } from '../admin'

export type LectureStatusEnum = 'OPEN' | 'CLOSED'

export interface LectureItemType {
  id: string
  name: string
  content: string
  semester: LectureSemesterEnum
  division: LectureDivisionEnum
  department: string
  line: string
  startDate: string
  endDate: string
  lectureType: LectureTypeEnum
  lectureStatus: LectureStatusEnum
  headCount: number
  maxRegisteredUser: number
  lecturer: string
}
