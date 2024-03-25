import { useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, patch } from '@bitgouel/api'

export const usePatchUserApprove = (userIds: string[]) =>
  useMutation<void>(
    adminQueryKeys.patchUserApprove(userIds),
    () => patch(adminUrl.approveUser(userIds)),
    {
      onSuccess: () => window.location.reload(),
      onError: (e) => {
        console.log(e)
      },
    }
  )
