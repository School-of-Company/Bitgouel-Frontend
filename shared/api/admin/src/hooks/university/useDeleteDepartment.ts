import { del, universityQueryKeys, universityUrl } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteDepartment = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError>(
    universityQueryKeys.deleteDepartment(id),
    () => del(universityUrl.departmentDelete(id)),
    options
  )
