import { ApproveStatusEnum } from './ApproveStatusEnum'

export type LectureTypeEnum =
  | 'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
  | 'UNIVERSITY_EXPLORATION_PROGRAM'

export type LectureSessionEnum =
  | '1학년 2학기'
  | '2학년 1학기'
  | '2학년 2학기'
  | '3학년 1학기'

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
