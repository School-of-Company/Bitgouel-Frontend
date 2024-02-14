import { ChangeEvent } from 'react'
import { UserTypes } from '../api'

type StatusTypes = 'current' | 'request'

export interface UserItemProps {
  item: UserTypes
  status: StatusTypes
  handleSelectUsers?: (e: ChangeEvent<HTMLInputElement>, userId: string) => void
  userIds?: string[]
}
