import { ApproveStatusEnum, RoleEnumTypes } from "../common"

export interface UserListOptionsTypes {
  keyword: string
  authority: RoleEnumTypes | 'ROLE_USER'
  approveStatus: ApproveStatusEnum
  page: number
  size: number
}