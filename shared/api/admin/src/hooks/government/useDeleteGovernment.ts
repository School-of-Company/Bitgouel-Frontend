import { del, governmentQueryKeys, governmentUrl } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteGovernment = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError>(
    governmentQueryKeys.deleteGovernment(id),
    () => del(governmentUrl.governmentDelete(id)),
    options
  )
