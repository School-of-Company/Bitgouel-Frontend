import { RoleEnumTypes } from './LoginResponseTypes'

export interface TokensTypes {
  accessToken: string
  refreshToken: string
  accessExpiredAt: string
  refreshExpiredAt: string
  authority: RoleEnumTypes
}
