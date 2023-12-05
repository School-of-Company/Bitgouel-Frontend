import { LectureDetailResponseTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { get } from '../../libs'
import { lectureUrl, lectureQueryKeys } from '../../libs'

export const useGetDetailLecture = (
  id: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<LectureDetailResponseTypes>>(
    lectureQueryKeys.getLectureDetail(id),
    () => get(lectureUrl.lectureDetail(id)),
    options
  )
