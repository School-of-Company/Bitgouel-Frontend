import { adminQueryKeys, adminUrl, del } from '@bitgouel/api'
import { useMutation } from '@tanstack/react-query'

export const useDeleteUserWithdraw = (userIds: string[]) =>
  useMutation<void>(
    adminQueryKeys.deleteUserWithout(userIds),
    () => del(adminUrl.withDrawUser(userIds)),
    {
      onSuccess: () => window.location.reload(),
      onError: () => {
        console.log('error')
      },
    }
  )
