import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import {
  LectureListOptionsTypes,
  LectureListResponseTypes,
} from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetLectureList = (
  queryString: LectureListOptionsTypes,
  options?: UseQueryOptions<LectureListResponseTypes>
) =>
  useQuery<LectureListResponseTypes, AxiosError>(
    lectureQueryKeys.getLectureList(),
    () => get(lectureUrl.lectureList(queryString)),
    options
  )
