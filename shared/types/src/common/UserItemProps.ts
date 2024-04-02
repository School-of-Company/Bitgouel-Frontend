import { ChangeEvent } from 'react'
import { RoleEnumTypes } from '../api'

type StatusTypes = 'current' | 'request'

export interface UserItemProps {
  id: string
  name: string
  authority?: RoleEnumTypes
  status: StatusTypes
  handleSelectUsers?: (e: ChangeEvent<HTMLInputElement>, userId: string) => void
  userIds?: string[]
}
