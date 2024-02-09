import { adminQueryKeys, adminUrl, del } from '../../common'
import { useMutation } from '@tanstack/react-query'

export const useDeleteUserWithout = (user_id: string) =>
  useMutation<void>(
    adminQueryKeys.deleteUserWithout(user_id),
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
