export interface FAQTypes {
  id?: number //Long
  question: string
  answer: string
}

export interface FAQListQuestionsTypes {
  faqs: FAQTypes[]
}
