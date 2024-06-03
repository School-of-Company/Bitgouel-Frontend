import { adminQueryKeys, adminUrl, patch } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

export const usePatchUserApprove = (
  userIds: string[],
  options?: UseMutationOptions
) =>
  useMutation<void, AxiosError>(
    adminQueryKeys.patchUserApprove(userIds),
    () => patch(adminUrl.approveUser(userIds)),
    options
  )
