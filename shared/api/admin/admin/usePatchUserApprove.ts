import { useModal } from '@bitgouel/common'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { adminQueryKeys, adminUrl, patch } from '../../common'

export const usePatchUserApprove = (userIds: string[]) => {
  const { closeModal } = useModal()
  return useMutation<void>(
    adminQueryKeys.patchUserApprove(userIds),
    () => patch(adminUrl.mutateAdmin(userIds)),
    {
      onSuccess: () => {
        closeModal()
        toast.success('신규 가입자를 수락했습니다')
      },
      onError: (e) => {
        console.log(e)
      },
    }
  )
}
