export type RoleEnumTypes =
  | 'ROLE_ADMIN'
  | 'ROLE_STUDENT'
  | 'ROLE_TEACHER'
  | 'ROLE_BBOZZAK'
  | 'ROLE_PROFESSOR'
  | 'ROLE_COMPANY_INSTRUCTOR'
  | 'ROLE_GOVERNMENT'

export interface LoginResponseTypes {
  accessToken: string
  refreshToken: string
  accessExpiredAt: string
  refreshExpiredAt: string
  authority: RoleEnumTypes
}
