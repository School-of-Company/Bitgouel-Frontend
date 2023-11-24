import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys, lectureUrl, patch } from '../../../../common'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const usePatchApproveLecture = (id: string) =>
  useMutation<void, AxiosError>(
    lectureQueryKeys.patchLectureApprove(id),
    () => patch(lectureUrl.lectureApprove(id), {}),
    {
      onSuccess: () => {
        toast.success('강의 개설을 승인했습니다')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
