import { get, inquiryQueryKeys, inquiryUrl } from '@bitgouel/api'
import { InquiryListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetMyInquiryList = (
  options?: UseQueryOptions<InquiryListResponseTypes>
) =>
  useQuery<InquiryListResponseTypes, AxiosError>(
    inquiryQueryKeys.getMyInquiry(),
    () => get(inquiryUrl.myInquiryList()),
    options
  )
