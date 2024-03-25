import { AnswerStatus, InquiryListQueryStringTypes } from '@bitgouel/types'
import { ApiErrorTypes, InquiryListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { get, inquiryQueryKeys, inquiryUrl } from '@bitgouel/api'

export const useGetInquiryList = (
  queryString: InquiryListQueryStringTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<InquiryListResponseTypes>, AxiosError<ApiErrorTypes>>(
    inquiryQueryKeys.getInquiry(),
    () => get(inquiryUrl.inquiryList(queryString)),
    options
  )
