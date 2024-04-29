import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApiErrorTypes, DepartmentsResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetDepartments = (
  keyword: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<DepartmentsResponseTypes>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getDepartments(),
    () => get(lectureUrl.lectureDepartment(keyword)),
    options
  )
