import { ApiErrorTypes, InquiryListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { get, inquiryQueryKeys, inquiryUrl } from '../../common'

export const useGetInquiryList = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<InquiryListResponseTypes>, AxiosError<ApiErrorTypes>>(
    inquiryQueryKeys.getInquiry(),
    () => get(inquiryUrl.inquiryList()),
    options
  )
