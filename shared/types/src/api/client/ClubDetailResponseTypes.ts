interface StudentType {
    id: string
    name: string
    authority: string
}

export interface ClubDetailResponseTypes {
  clubName: string
  highSchoolName: string
  headCount: number
  students: StudentType[]
  teacher: {id: string, name: string}
}