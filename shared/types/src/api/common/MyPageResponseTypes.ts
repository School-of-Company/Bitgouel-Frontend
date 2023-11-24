type AuthorityTypes =
  | 'ROLE_USER'
  | 'ROLE_ADMIN'
  | 'ROLE_STUDENT'
  | 'ROLE_TEACHER'
  | 'ROLE_BBOZZAK'
  | 'ROLE_PROFESSOR'
  | 'ROLE_COMPANY_INSTRUCTOR'
  | 'ROLE_GOVERNMENT'

export interface MyPageResponseTypes {
  name: string
  email: string
  phoneNumber: string
  authority: AuthorityTypes
  organization: string
}
