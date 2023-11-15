import { ApproveStatusEnum, LectureTypeEnum } from '../hooks'

export interface LectureListOptionsTypes {
  page: number
  size: number
  status: ApproveStatusEnum
  type: LectureTypeEnum
}
