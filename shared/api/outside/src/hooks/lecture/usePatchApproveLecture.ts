import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys, lectureUrl, patch } from '../../../../common'
import { AxiosResponse } from 'axios'

export const usePatchApproveLecture = (id: string) =>
  useMutation<void>(
    lectureQueryKeys.patchLectureApprove(id),
    () => patch(lectureUrl.lectureApprove(id), {}),
    {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
