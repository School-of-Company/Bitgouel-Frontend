import { LectureCreatePayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { lectureUrl, lectureQueryKeys, post } from '../../../../common'
import { toast } from 'react-toastify'
import { useModal } from '@bitgouel/common/src/hooks'

export const usePostCreateLecture = () => {
  const router = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError, LectureCreatePayloadTypes>(
    lectureQueryKeys.postLectureCreate(),
    (createValues) => post(lectureUrl.lecture(), createValues),
    {
      onSuccess: () => {
        closeModal()
        router.push('/main/lecture')
        toast.success('개설 신청이 완료되었습니다')
        toast.info('관리자의 승인을 기다려주세요')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
