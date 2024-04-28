import { get, inquiryQueryKeys, inquiryUrl } from '@bitgouel/api'
import {
  ApiErrorTypes,
  InquiryListQueryStringTypes,
  InquiryListResponseTypes,
} from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetInquiryList = (
  queryString: InquiryListQueryStringTypes,
  options?: UseQueryOptions<InquiryListResponseTypes>
) =>
  useQuery<InquiryListResponseTypes, AxiosError>(
    inquiryQueryKeys.getInquiry(),
    () => get(inquiryUrl.inquiryList(queryString)),
    options
  )
