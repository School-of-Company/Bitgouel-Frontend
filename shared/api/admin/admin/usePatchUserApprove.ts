import { useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, patch } from '../../common'

export const usePatchUserApprove = (userIds: string[]) =>
  useMutation<void>(
    adminQueryKeys.patchUserApprove(userIds),
    () => patch(adminUrl.mutateAdmin(userIds)),
    {
      onSuccess: () => {
        console.log('success')
      },
      onError: () => {
        console.log('error')
      }
    }
  )
