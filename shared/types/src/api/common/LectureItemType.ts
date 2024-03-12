import { LectureTypeEnum } from '../admin'
import { ApproveStatusEnum } from './ApproveStatusEnum'

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
