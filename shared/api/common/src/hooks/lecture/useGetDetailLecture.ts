import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { LectureDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetDetailLecture = (
  id: string,
  options?: UseQueryOptions<LectureDetailResponseTypes>
) =>
  useQuery<LectureDetailResponseTypes, AxiosError>(
    lectureQueryKeys.getLectureDetail(id),
    () => get(lectureUrl.lectureDetail(id)),
    options
  )
