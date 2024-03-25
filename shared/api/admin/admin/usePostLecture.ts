import { lectureQueryKeys, lectureUrl, post } from '@bitgouel/api'
import { useModal } from '@bitgouel/common/src/hooks'
import { LectureCreatePayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const usePostLecture = () => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError, LectureCreatePayloadTypes>(
    lectureQueryKeys.postLectureCreate(),
    (createValues) => post(lectureUrl.lecture(), createValues),
    {
      onSuccess: () => {
        closeModal()
        push('/main/lecture')
        toast.success('강의를 개설했습니다')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
