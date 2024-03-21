import { get, inquiryQueryKeys, inquiryUrl } from '@bitgouel/api'
import { ApiErrorTypes, InquiryListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetMyInquiryList = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<InquiryListResponseTypes>, AxiosError<ApiErrorTypes>>(
    inquiryQueryKeys.getMyInquiry(),
    () => get(inquiryUrl.myInquiryList()),
    options
  )
