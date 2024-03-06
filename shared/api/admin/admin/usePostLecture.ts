import { LectureCreatePayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { lectureUrl, lectureQueryKeys, post } from '../../common'
import { toast } from 'react-toastify'
import { useModal } from '@bitgouel/common/src/hooks'

export const usePostLecture = () => {
  const router = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError, LectureCreatePayloadTypes>(
    lectureQueryKeys.postLectureCreate(),
    (createValues) => post(lectureUrl.lecture(), createValues),
    {
      onSuccess: () => {
        closeModal()
        router.push('/main/lecture')
        toast.success('강의를 개설했습니다')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
