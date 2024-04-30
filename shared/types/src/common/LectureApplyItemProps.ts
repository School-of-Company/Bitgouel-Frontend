import { ApplyStudentType } from "../api";

export interface LectureApplyItemProps {
  item: ApplyStudentType
  ids: string[]
  handleSelectUsers: (checked: boolean, userId: string) => void
}
