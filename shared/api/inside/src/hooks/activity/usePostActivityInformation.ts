import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, post, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { ActivityPayloadTypes } from '@bitgouel/types'
import { toast } from 'react-toastify'
import { useModal } from '@bitgouel/common/src/hooks'

export const usePostActivityInformation = () => {
  const router = useRouter()
  const { closeModal } = useModal()

  return useMutation<AxiosResponse, Error, ActivityPayloadTypes>(
    activityQueryKeys.postActivityInformation(),
    () => post(activityUrl.activityInformation(), {}),
    {
      onSuccess: () => {
        closeModal()
        router.push('/main/club/student/activity')
        toast.success('개설 신청이 완료되었습니다')
        toast.info('관리자의 승인을 기다려주세요')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
