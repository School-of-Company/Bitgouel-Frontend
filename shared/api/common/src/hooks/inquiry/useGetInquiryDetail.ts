import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { get, inquiryQueryKeys, inquiryUrl } from '@bitgouel/api'
import { AxiosError, AxiosResponse } from 'axios'
import { ApiErrorTypes, InquiryDetailResponseTypes } from '@bitgouel/types'

export const useGetInquiryDetail = (
  id: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<
    AxiosResponse<InquiryDetailResponseTypes>,
    AxiosError<ApiErrorTypes>
  >(
    inquiryQueryKeys.getInquiryDetail(id),
    () => get(inquiryUrl.inquiryDetail(id)),
    options
  )
