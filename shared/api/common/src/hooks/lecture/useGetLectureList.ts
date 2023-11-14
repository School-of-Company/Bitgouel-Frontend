import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { get } from '../../libs'
import { AxiosResponse } from 'axios'
import { LectureItemType } from '../../'
import { LectureListOptionsTypes } from '../../'

export const useGetLectureList = (
  queryString: LectureListOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse>(
    lectureQueryKeys.getLectureList(),
    () => get(lectureUrl.lectureList(queryString)),
    options
    // {
    //   onSuccess: ({ data }) => {
    //     console.log(data.lectures.content, '헤응')
    //   },
    // }
  )
