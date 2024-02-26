import { ChangeEvent } from 'react'
import { UserTypes, WithdrawUserTypes } from '../api'

type StatusTypes = 'current' | 'request'

export interface UserItemProps {
  item: UserTypes | WithdrawUserTypes
  status: StatusTypes
  handleSelectUsers?: (e: ChangeEvent<HTMLInputElement>, userId: string) => void
  userIds?: string[]
}
