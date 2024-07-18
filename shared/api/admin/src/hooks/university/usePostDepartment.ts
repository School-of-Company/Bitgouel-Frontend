import {
    post,
    universityQueryKeys,
    universityUrl
} from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostDepartment = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, { department: string }>
) =>
  useMutation<void, AxiosError, { department: string }>(
    universityQueryKeys.patchUniversity(id),
    (createValues) => post(universityUrl.departmentCreate(id), createValues),
    options
  )
