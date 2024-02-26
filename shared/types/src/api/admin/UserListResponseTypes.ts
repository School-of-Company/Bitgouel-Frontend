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

export type WithdrawUserTypes = Omit<Omit<UserTypes, 'authority'>, 'approveStatus'>

export interface UserListResponseTypes {
  users: UserTypes[]
}

export interface WithdrawListResponseTypes {
  students: WithdrawUserTypes[]
}
