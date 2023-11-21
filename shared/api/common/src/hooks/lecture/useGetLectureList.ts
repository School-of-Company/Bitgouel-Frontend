import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { lectureQueryKeys, get, lectureUrl } from '../../libs'
import { AxiosResponse } from 'axios'
import { LectureListOptionsTypes } from '../../types'

export const useGetLectureList = (
  queryString: LectureListOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse>(
    lectureQueryKeys.getLectureList(),
    () => get(lectureUrl.lectureList(queryString)),
    options
  )
