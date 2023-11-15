import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { get } from '../../libs'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'

export const useGetDetailLecture = (
  id: string | undefined,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse>(
    lectureQueryKeys.getLectureDetail(id),
    () => get(lectureUrl.lectureDetail(id)),
    options
  )
