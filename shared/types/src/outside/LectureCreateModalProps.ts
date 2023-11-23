export interface LectureCreateModalProps {
  createValues: {
    name: string
    content: string
    startDate: string
    endDate: string
    completeDate: string
    lectureType: string
    credit: number
    maxRegisteredUser: number
  }
}
