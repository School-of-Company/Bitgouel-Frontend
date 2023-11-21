import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../'
import { lectureUrl } from '../../'
import { patch } from '../../'
import { AxiosResponse } from 'axios'

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
