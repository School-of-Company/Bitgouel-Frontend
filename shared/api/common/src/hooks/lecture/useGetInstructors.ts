import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApiErrorTypes, InstructorsResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetInstructors = (
  keyword: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<InstructorsResponseTypes>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getInstructors(),
    () => get(lectureUrl.lectureInstructor(keyword)),
    options
  )
