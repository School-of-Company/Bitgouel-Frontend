interface StudentType {
    id: string
    name: string
    authority: string
}

export interface MyClubResponseTypes {
  clubName: string
  highSchoolName: string
  studentHeadcount: number
  students: StudentType[]
}