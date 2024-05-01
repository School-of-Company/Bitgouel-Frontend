import { ChangeEvent } from 'react'
import { RoleEnumTypes } from '../api'

type StatusTypes = 'current' | 'request'

export interface UserItemProps {
  id: string
  userIds?: string[]
  name: string
  authority?: RoleEnumTypes
  status: StatusTypes
  handleSelectUsers?: (checked: boolean, userId: string) => void
}
