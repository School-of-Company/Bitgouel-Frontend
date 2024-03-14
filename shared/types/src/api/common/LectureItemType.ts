import { ApproveStatusEnum } from './ApproveStatusEnum'

export type LectureTypeEnum =
  | 'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
  | 'UNIVERSITY_EXPLORATION_PROGRAM'

export type LectureStatusEnum = 'OPEN' | 'CLOSED'

export interface LectureItemType {
  id: string
  name: string
  content: string
  startDate: string
  endDate: string
  completeDate: string
  lectureType: LectureTypeEnum
  lectureStatus: LectureStatusEnum
  approveStatus: ApproveStatusEnum
  headCount: number
  maxRegisteredUser: number
  lecturer: string
}
