export interface ApplyStudentType {
  id: string
  cohort: number
  name: string
  school: string
  grade: number
  classNumber: number
  number: number
  clubName: string
  phoneNumber: string
  email: string
}

export interface ApplyListResponseTypes {
  students: ApplyListResponseTypes[]
}
