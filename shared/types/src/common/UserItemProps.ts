import { UserTypes } from '../api'

type StatusTypes = 'current' | 'request'

export interface UserItemProps {
  item: UserTypes
  status: StatusTypes
  handleSelectUsers?: (cheked: boolean, userId: string) => void
  userIds?: string[]
}
