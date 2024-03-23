import { faqQueryKeys, faqUrl, get } from '@bitgouel/api'
import { FAQListQuestionsTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetListQuestions = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<FAQListQuestionsTypes>>(
    faqQueryKeys.getQuestions(),
    () => get(faqUrl.listQuestions()),
    options
  )
