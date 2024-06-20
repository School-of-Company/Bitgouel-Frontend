import { LectureDate } from './LectureCreatePayloadTypes'
import { LectureItemType } from './LectureItemType'

export interface LectureDetailResponseTypes extends LectureItemType {
  createAt: string
  credit: 1 | 2
  isRegistered: boolean
  lectureDates: LectureDate[]
}
