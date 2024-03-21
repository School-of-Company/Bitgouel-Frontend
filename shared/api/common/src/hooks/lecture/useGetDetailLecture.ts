import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { LectureDetailResponseTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetDetailLecture = (
  id: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<LectureDetailResponseTypes>>(
    lectureQueryKeys.getLectureDetail(id),
    () => get(lectureUrl.lectureDetail(id)),
    options
  )
