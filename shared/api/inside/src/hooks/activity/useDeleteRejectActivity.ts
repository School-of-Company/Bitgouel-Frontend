import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, del, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useModal } from '@bitgouel/common'
import { toast } from 'react-toastify'

export const useDeleteActivityReject = (activity_id: string) => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<AxiosResponse, Error>(
    activityQueryKeys.deleteActivityReject(activity_id),
    () => del(activityUrl.activityReject(activity_id)),
    {
      onSuccess: () => {
        closeModal()
        push('/main/club/student/activity/my')
        toast.success('삭제가 되었습니다.')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
