import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, del, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useModal } from '@bitgouel/common'
import { toast } from 'react-toastify'

export const useDeleteActivityInformationRemove = (activity_id: string) => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<AxiosResponse, Error>(
    activityQueryKeys.deleteActivityInformationRemove(activity_id),
    () => del(activityUrl.activityInformationRemove(activity_id)),
    {
      onSuccess: () => {
        closeModal()
        push('/main/club/student/activity/my')
        toast.success('활동이 삭제되었습니다.')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
