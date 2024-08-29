import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetLectureExcel = (
  options?: UseQueryOptions<Blob, AxiosError>
) =>
  useQuery<Blob, AxiosError>(
    lectureQueryKeys.getExcel(),
    () =>
      get(lectureUrl.lectureExcel(), {
        responseType: 'blob',
      }),
    options
  )
