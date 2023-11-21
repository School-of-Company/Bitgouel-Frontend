import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { lectureQueryKeys, patch, lectureUrl } from '../../libs'

export const usePatchApproveLecture = (id: string) =>
  useMutation<AxiosResponse>(
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
