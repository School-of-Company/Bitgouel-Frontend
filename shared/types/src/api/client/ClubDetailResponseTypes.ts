interface StudentType {
  id: string
  name: string
  userId: string
}

export interface ClubDetailResponseTypes {
  clubId: number
  clubName: string
  schoolName: string
  headCount: number
  students: StudentType[]
  teacher: { id: string; name: string }
}
