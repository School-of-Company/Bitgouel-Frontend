import { ApproveStatusEnum } from './ApproveStatusEnum'
import { LectureTypeEnum } from './LectureItemType'

export interface LectureListOptionsTypes {
  page: number
  size: number
  status: ApproveStatusEnum
  type: LectureTypeEnum
}
