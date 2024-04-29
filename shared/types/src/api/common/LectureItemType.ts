import {
  LectureDate,
  LectureDivisionEnum,
  LectureSemesterEnum,
  LectureTypeEnum,
} from '../common'

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
  lectureDates: LectureDate[]
  lectureType: LectureTypeEnum
  lectureStatus: LectureStatusEnum
  headCount: number
  maxRegisteredUser: number
  lecturer: string
}
