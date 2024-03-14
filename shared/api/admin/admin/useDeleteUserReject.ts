import { useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, del } from '../../common'

export const useDeleteUserReject = (userIds: string[]) =>
  useMutation<void>(
    adminQueryKeys.deleteUserReject(userIds),
    () => del(adminUrl.rejectUser(userIds)),
    {
      onSuccess: () => window.location.reload(),
      onError: () => {
        console.log('error')
      },
    }
  )
