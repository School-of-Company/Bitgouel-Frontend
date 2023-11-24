import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys, lectureUrl, del } from '../../../../common'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const useDeleteRejectLecture = (id: string) =>
  useMutation<void, AxiosError>(
    lectureQueryKeys.deleteLectureReject(id),
    () => del(lectureUrl.lectureReject(id), {}),
    {
      onSuccess: () => {
        toast.success('강의 개설을 거부했습니다')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
