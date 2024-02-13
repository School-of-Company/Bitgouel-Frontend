import { useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, del } from '../../common'

export const useDeleteUserReject = (userIds: string[]) =>
  useMutation<void>(
    adminQueryKeys.deleteUserReject(),
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
