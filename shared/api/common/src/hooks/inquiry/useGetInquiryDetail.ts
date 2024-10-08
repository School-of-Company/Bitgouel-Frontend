import { get, inquiryQueryKeys, inquiryUrl } from '@bitgouel/api'
import { ApiErrorTypes, InquiryDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetInquiryDetail = (
  id: string,
  options?: UseQueryOptions<InquiryDetailResponseTypes>
) =>
  useQuery<InquiryDetailResponseTypes, AxiosError<ApiErrorTypes>>(
    inquiryQueryKeys.getInquiryDetail(id),
    () => get(inquiryUrl.inquiryDetail(id)),
    options
  )
