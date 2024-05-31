import { adminQueryKeys, adminUrl, del } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteUserReject = (
  userIds: string[],
  options?: UseMutationOptions
) =>
  useMutation<void, AxiosError>(
    adminQueryKeys.deleteUserReject(userIds),
    () => del(adminUrl.rejectUser(userIds)),
    options
  )
