import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
<<<<<<<< HEAD:shared/api/common/src/hooks/lecture/useGetDepartments.ts
import { ApiErrorTypes, DepartmentsResponseTypes } from '@bitgouel/types'
========
import { DepartmentResponseTypes } from '@bitgouel/types'
>>>>>>>> develop:shared/api/admin/src/hooks/admin/useGetDepartment.ts
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetDepartments = (
  keyword: string,
  options?: UseQueryOptions<DepartmentResponseTypes>
) =>
<<<<<<<< HEAD:shared/api/common/src/hooks/lecture/useGetDepartments.ts
  useQuery<AxiosResponse<DepartmentsResponseTypes>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getDepartments(),
========
  useQuery<DepartmentResponseTypes, AxiosError>(
    lectureQueryKeys.getDepartment(),
>>>>>>>> develop:shared/api/admin/src/hooks/admin/useGetDepartment.ts
    () => get(lectureUrl.lectureDepartment(keyword)),
    options
  )
