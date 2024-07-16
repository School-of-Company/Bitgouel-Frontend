interface UniversityType {
  id: number
  universityName: string
  departments: string[]
}

export interface UniversityResponseTypes {
  universities: UniversityType[]
}
