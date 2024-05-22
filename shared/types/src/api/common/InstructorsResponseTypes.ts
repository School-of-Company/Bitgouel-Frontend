export interface InstructorsItemType {
  id: string
  name: string
  organization: string
  authority: 'ROLE_PROFESSOR' | 'ROLE_GOVERNMENT' | 'ROLE_COMPANY_INSTRUCTOR'
}

export interface InstructorsResponseTypes {
  instructors: InstructorsItemType[]
}
