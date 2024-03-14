import { AnswerStatus } from '../../common'

export interface InquiryListQueryStringTypes {
  keyword: string
  answerStatus?: AnswerStatus | ''
}
