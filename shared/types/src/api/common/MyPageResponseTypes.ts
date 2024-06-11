import { RoleEnumTypes } from './LoginResponseTypes'

export interface MyPageResponseTypes {
  id: string
  name: string
  email: string
  phoneNumber: string
  authority: RoleEnumTypes
  organization: string
}
