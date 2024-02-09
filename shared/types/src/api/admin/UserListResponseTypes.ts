type AuthorityTypes =
  | 'ADMIN'
  | 'STUDENT'
  | 'TEACHER'
  | 'PROFESSOR'
  | 'GOVEMMENT'
  | 'COMPANY_INSTRUCDOR'
  | 'BBOZZAK_TEACHER'

type ApproveStatusTypes = 'PENDING' | 'CREATED'

export interface UserListResponseTypes {
  id: string
  name: string
  authority: AuthorityTypes
  approveStatus: ApproveStatusTypes
}
