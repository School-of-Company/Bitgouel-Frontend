import { FAQListQuestionsTypes } from '@bitgouel/types'

export const getFaq = async (): Promise<FAQListQuestionsTypes> => {
  const response = await fetch(
    new URL('/faq', process.env.NEXT_PUBLIC_SERVER_URL),
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const faqs: FAQListQuestionsTypes = await response.json()

  return faqs
}
