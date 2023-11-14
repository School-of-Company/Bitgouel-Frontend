import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { get } from '../../libs'
import { AxiosResponse } from 'axios'

interface LectureDetailItemType {
  id: string
  name: string
  content: string
  startDate: string
  endDate: string
  completeDate: string
  lectureType: string
  lectureStatus: string
  headCount: number
  maxRegisteredUser: number
  lecturer: string
}

export const useGetDetailLecture = (
  id: string,
  options?: UseQueryOptions<AxiosResponse<LectureDetailItemType[]>>
) =>
  useQuery<AxiosResponse<LectureDetailItemType[]>>(
    lectureQueryKeys.getLectureDetail(id),
    () => get(lectureUrl.lectureDetail(id)),
    options
  )
