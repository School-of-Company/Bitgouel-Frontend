export interface LectureItem {
  id: string
  name: string
  lectureType: string
  currentCompletedDate: string
  lecturer: string
  isComplete: boolean
}

export interface CompleteLectureTypes {
  lectures: LectureItem[]
}
