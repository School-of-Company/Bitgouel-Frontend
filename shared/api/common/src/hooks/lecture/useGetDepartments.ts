import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { DepartmentsResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetDepartments = (
  keyword: string,
  options?: UseQueryOptions<DepartmentsResponseTypes>
) =>
  useQuery<DepartmentsResponseTypes, AxiosError>(
    lectureQueryKeys.getDepartments(),
    () => get(lectureUrl.lectureDepartment(keyword)),
    options
  )
