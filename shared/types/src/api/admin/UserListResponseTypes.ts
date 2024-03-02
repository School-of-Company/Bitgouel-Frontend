import { RoleEnumTypes } from '../common'

export type AuthorityKorTypes =
  | '관리자'
  | '학생'
  | '선생님'
  | '교수님'
  | '유관기관'
  | '기업강사'
  | '뽀짝 선생님'

export type ApproveStatusTypes = 'PENDING' | 'CREATED'

export interface UserTypes {
  id: string
  name: string
  authority: RoleEnumTypes
  approveStatus: ApproveStatusTypes
}

export interface UserListResponseTypes {
  users: UserTypes[]
}

export interface WithdrawUserTypes {
  withdrawId: number
  userId: string
  studentName: string
}

export interface WithdrawListResponseTypes {
  students: WithdrawUserTypes[]
}
