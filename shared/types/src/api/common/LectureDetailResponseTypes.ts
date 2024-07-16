import { LectureDate } from './LectureWritePayloadTypes'
import { LectureItemType } from './LectureItemType'

export interface LectureDetailResponseTypes extends LectureItemType {
  createAt: string
  credit: 1 | 2
  isRegistered: boolean
  lectureDates: LectureDate[]
  locationX: string
  locationY: string
  address: string
  locationDetails: string
}
