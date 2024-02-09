import { useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, patch } from '../../common'

export const usePatchUserApprove = (user_id: string) =>
  useMutation<void>(
    adminQueryKeys.patchUserApprove(user_id),
    () => patch(adminUrl.mutateAdmin(user_id)),
    {
      onSuccess: () => {
        console.log('success')
      },
      onError: () => {
        console.log('error')
      }
    }
  )
