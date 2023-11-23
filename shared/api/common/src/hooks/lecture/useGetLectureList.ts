import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { get } from '../../libs'
import { AxiosResponse } from 'axios'
import {
  LectureListOptionsTypes,
  LectureListResponseTypes,
} from '@bitgouel/types'

export const useGetLectureList = (
  queryString: LectureListOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<LectureListResponseTypes>>(
    lectureQueryKeys.getLectureList(),
    () => get(lectureUrl.lectureList(queryString)),
    options
  )
