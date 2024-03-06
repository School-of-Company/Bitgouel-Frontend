import { ApproveStatusEnum } from './ApproveStatusEnum'

export type LectureTypeEnum =
  | 'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
  | 'UNIVERSITY_EXPLORATION_PROGRAM'

export type LectureLineEnum =
  | '기계'
  | '자동차'
  | '전기전자'
  | '생명화학공학'
  | '뷰티'
  | '의료헬스'
  | '드론'

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
