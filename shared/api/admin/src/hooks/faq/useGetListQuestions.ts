import { faqQueryKeys, faqUrl, get } from '@bitgouel/api'
import { FAQListQuestionsTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetListQuestions = (
  options?: UseQueryOptions<FAQListQuestionsTypes>
) =>
  useQuery<FAQListQuestionsTypes, AxiosError>(
    faqQueryKeys.getQuestions(),
    () => get(faqUrl.faq()),
    options
  )
