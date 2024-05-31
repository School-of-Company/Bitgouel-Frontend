import { adminQueryKeys, adminUrl, del } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteUserWithdraw = (
  userIds: string[],
  options?: UseMutationOptions
) =>
  useMutation<void, AxiosError>(
    adminQueryKeys.deleteUserWithout(userIds),
    () => del(adminUrl.withDrawUser(userIds)),
    options
  )
