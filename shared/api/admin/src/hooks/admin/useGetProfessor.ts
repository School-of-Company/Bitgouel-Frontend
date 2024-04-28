import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApiErrorTypes, ProfessorResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetProfessor = (
  keyword: string,
  options?: UseQueryOptions<ProfessorResponseTypes>
) =>
  useQuery<ProfessorResponseTypes, AxiosError>(
    lectureQueryKeys.getProfessor(),
    () => get(lectureUrl.lectureInstructor(keyword)),
    options
  )
