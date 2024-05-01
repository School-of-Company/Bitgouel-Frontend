import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { CompleteLectureTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetCompleteLecture = (
  student_id: string,
  options?: UseQueryOptions<CompleteLectureTypes>
) =>
  useQuery<CompleteLectureTypes, AxiosError>(
    lectureQueryKeys.getCompleteLecture(student_id),
    () => get(lectureUrl.lectureCompleteList(student_id)),
    options
  )
