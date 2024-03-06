interface ProfessorItemType {
  id: string
  name: string
  organization: string
  authority: 'ROLE_PROFESSOR' | 'ROLE_GOVERNMENT' | 'ROLE_COMPANY_INSTRUCTOR'
}

export interface ProfessorResponseTypes {
  instructors: ProfessorItemType[]
}
