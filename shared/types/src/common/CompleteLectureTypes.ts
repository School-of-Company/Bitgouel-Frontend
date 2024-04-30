export interface LectureItem {
  id: string //UUID
  name: string
  lectureType: string
  currentCompletedDate: string // LocalDate
  lecturer: string
  isComplete: boolean
}

export interface CompleteLectureTypes {
  lectures: LectureItem[]
}
