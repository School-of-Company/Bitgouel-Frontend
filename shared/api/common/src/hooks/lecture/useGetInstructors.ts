import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { InstructorsResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetInstructors = (
  keyword: string,
  options?: UseQueryOptions<InstructorsResponseTypes>
) =>
  useQuery<InstructorsResponseTypes, AxiosError>(
    lectureQueryKeys.getInstructors(),
    () => get(lectureUrl.lectureInstructor(keyword)),
    options
  )
