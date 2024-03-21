import { AnswerStatus } from '../../common/AnswerStatus'

export interface InquiryDetailResponseTypes {
  id: string
  question: string
  questionDetail: string
  questionerId: string
  questioner: string
  questionDate: string
  answerStatus: AnswerStatus
  createdAt: string
  answer: string
  adminId: string
  answeredDate: string
}
