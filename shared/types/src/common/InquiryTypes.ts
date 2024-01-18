import { AnswerStatus } from "./AnswerStatus"

export interface InquiryTypes {
  id: string
  question: string
  userId: string
  username: string
  createdAt: string
  answerStatus: AnswerStatus
}
