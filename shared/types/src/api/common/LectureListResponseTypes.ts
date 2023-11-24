import { LectureItemType } from './LectureItemType'

export interface LectureListResponseTypes {
  lectures: {
    content: LectureItemType[]
  }
}
