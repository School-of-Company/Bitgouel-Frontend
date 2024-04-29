import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApiErrorTypes, InstructorsResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetInstructors = (
  keyword: string,
  options?: UseQueryOptions<ProfessorResponseTypes>
) =>
<<<<<<<< HEAD:shared/api/common/src/hooks/lecture/useGetInstructors.ts
  useQuery<AxiosResponse<InstructorsResponseTypes>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getInstructors(),
========
  useQuery<ProfessorResponseTypes, AxiosError>(
    lectureQueryKeys.getProfessor(),
>>>>>>>> develop:shared/api/admin/src/hooks/admin/useGetProfessor.ts
    () => get(lectureUrl.lectureInstructor(keyword)),
    options
  )
