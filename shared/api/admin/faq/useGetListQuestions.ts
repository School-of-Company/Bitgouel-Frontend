import { faqQueryKeys, faqUrl, get } from '@bitgouel/api'
import { ApiErrorTypes, FAQListQuestionsTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetListQuestions = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<FAQListQuestionsTypes>, AxiosError<ApiErrorTypes>>(
    faqQueryKeys.getQuestions(),
    () => get(faqUrl.faq()),
    options
  )
