import { ChangeEvent } from 'react'

type StatusTypes = 'current' | 'request'

export interface UserItemProps {
  id: string
  name: string
  authority?: string
  status: StatusTypes
  handleSelectUsers?: (e: ChangeEvent<HTMLInputElement>, userId: string) => void
  userIds?: string[]
}
