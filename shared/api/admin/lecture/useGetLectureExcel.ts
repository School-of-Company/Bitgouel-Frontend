import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApiErrorTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetLectureExcel = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<ArrayBuffer>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getExcel(),
    () => get(lectureUrl.lectureExcel()),
    options
  )
