import { adminQueryKeys, adminUrl, del } from '@bitgouel/api'
import { useMutation } from '@tanstack/react-query'

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
