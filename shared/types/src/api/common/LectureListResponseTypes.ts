import { LectureItemType } from './LectureItemType'
import { PageTypes } from './PageTypes'

export interface LectureListResponseTypes {
  lectures: {
    content: LectureItemType[]
  } & PageTypes
}
