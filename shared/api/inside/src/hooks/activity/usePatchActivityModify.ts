import { useModal } from '@bitgouel/common'
import { ActivityPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { activityQueryKeys, activityUrl, patch } from '../../../../common'
import { toast } from 'react-toastify'

export const usePatchActivityModify = (activity_id: string) => {
  const { closeModal } = useModal()
  const { push } = useRouter()

  return useMutation<AxiosResponse, Error, ActivityPayloadTypes>(
    activityQueryKeys.patchActivityModify(activity_id),
    (data) => patch(activityUrl.activityModify(activity_id), data),
    {
      onSuccess: ({ data }) => {
        closeModal()
        push('/main/club/student/activity/my')
        toast.success('수정이되었습니다.')
      },
      onError: (error) => {
        toast.error('빈 공백이 있습니다.')
      },
    }
  )
}
