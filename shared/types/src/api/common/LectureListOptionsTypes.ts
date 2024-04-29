import { LectureTypeEnum } from './LectureCreatePayloadTypes'

export interface LectureListOptionsTypes {
  page: number
  size: number
  type: LectureTypeEnum
}
