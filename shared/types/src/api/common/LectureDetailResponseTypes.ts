import { LectureDate } from './LectureCreatePayloadTypes'
import { LectureItemType } from './LectureItemType'

export interface LectureDetailResponseTypes extends LectureItemType {
  createAt: string
  credit: number
  isRegistered: boolean
  lectureDates: LectureDate[]
}
