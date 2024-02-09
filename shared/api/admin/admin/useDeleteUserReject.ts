import { useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, del } from '../../common'

export const useDeleteUserReject = (user_id: string) =>
  useMutation<void>(
    adminQueryKeys.deleteUserReject(user_id),
    () => del(adminUrl.mutateAdmin(user_id)),
    {
      onSuccess: () => {
        console.log('success')
      },
      onError: () => {
        console.log('error')
      },
    }
  )
