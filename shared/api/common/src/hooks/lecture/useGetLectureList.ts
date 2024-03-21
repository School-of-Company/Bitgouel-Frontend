import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import {
  LectureListOptionsTypes,
  LectureListResponseTypes,
} from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetLectureList = (
  queryString: LectureListOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<LectureListResponseTypes>>(
    lectureQueryKeys.getLectureList(),
    () => get(lectureUrl.lectureList(queryString)),
    options
  )
