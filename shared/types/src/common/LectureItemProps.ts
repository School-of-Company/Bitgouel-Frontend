import { LectureItemType, RoleEnumTypes } from '../api'

export interface LectureItemProps {
  item: LectureItemType
  role: RoleEnumTypes | null
}
