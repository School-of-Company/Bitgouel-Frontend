import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, patch, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useModal } from '@bitgouel/common'
import { toast } from 'react-toastify'

export const usePatchActivityApprove = (activity_id: string) => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<AxiosResponse, Error>(
    activityQueryKeys.patchActivityApprove(activity_id),
    (createValues) =>
      patch(activityUrl.activityApprove(activity_id), createValues),
    {
      onSuccess: () => {
        closeModal()
        push('/main/club/student/activity/my')
        toast.success('승인 되었습니다.')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
