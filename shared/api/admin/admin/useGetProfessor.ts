import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApiErrorTypes, ProfessorResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetProfessor = (
  keyword: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<ProfessorResponseTypes>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getProfessor(),
    () => get(lectureUrl.lectureInstructor(keyword)),
    options
  )
