import { LectureTypeEnum, RoleEnumTypes } from '../api'
import { AnswerStatus } from './AnswerStatus'

export type cohortTypes = '1' | '2' | '3' | '4'

export interface FilterListTypes {
  text: string
  checked: boolean
}

export interface JobsFilterListTypes extends FilterListTypes {
  item: 'all' | RoleEnumTypes
}

export interface CohortsFilterListTypes extends FilterListTypes {
  item: cohortTypes
}

export interface InquiryStatusFilterListTypes extends FilterListTypes {
  item: 'all' | AnswerStatus
}
