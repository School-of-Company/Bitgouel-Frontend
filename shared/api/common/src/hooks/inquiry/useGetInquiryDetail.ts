import { get, inquiryQueryKeys, inquiryUrl } from '@bitgouel/api'
import { ApiErrorTypes, InquiryDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

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
