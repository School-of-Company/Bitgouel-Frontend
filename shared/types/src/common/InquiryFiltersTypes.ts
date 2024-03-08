import { AnswerStatus } from './AnswerStatus'

type FilterTexts = '전체' | '답변 대기 중' | '답변 완료됨'

export interface InquiryFiltersTypes {
  text: FilterTexts
  status: AnswerStatus | string
  checked: boolean
}
