import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys, lectureUrl, post } from '../../../../common'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useModal } from '@bitgouel/common/src/hooks'
import { toast } from 'react-toastify'
import { ApiErrorTypes } from '@bitgouel/types'

export const usePostApplicationLecture = (id: string) => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.postLectureApplication(id),
    () => post(lectureUrl.lectureEnrolment(id), {}),
    {
      onSuccess: () => {
        closeModal()
        push('/main/lecture')
        toast.success('수강신청을 완료하였습니다')
      },
      onError: ({response}) => {
        toast.error(response?.data.message.split(".")[0])
      },
    }
  )
}

