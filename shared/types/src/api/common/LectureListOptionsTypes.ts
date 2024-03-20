import { LectureTypeEnum } from '../admin'
import { ApproveStatusEnum } from './ApproveStatusEnum'

export interface LectureListOptionsTypes {
  page: number
  size: number
  status: ApproveStatusEnum
  type: LectureTypeEnum
}
