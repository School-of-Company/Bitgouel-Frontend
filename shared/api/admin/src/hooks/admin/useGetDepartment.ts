import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { DepartmentResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetDepartment = (
  keyword: string,
  options?: UseQueryOptions<DepartmentResponseTypes>
) =>
  useQuery<DepartmentResponseTypes, AxiosError>(
    lectureQueryKeys.getDepartment(),
    () => get(lectureUrl.lectureDepartment(keyword)),
    options
  )
