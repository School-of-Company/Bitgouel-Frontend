import { adminQueryKeys, adminUrl, del } from '../../common'
import { useMutation } from '@tanstack/react-query'

export const useDeleteUserWithout = (userIds: string[]) =>
  useMutation<void>(
    adminQueryKeys.deleteUserWithout(userIds),
    () => del(adminUrl.mutateAdmin(userIds)),
    {
      onSuccess: () => {
        console.log('success')
      },
      onError: () => {
        console.log('error')
      },
    }
  )
