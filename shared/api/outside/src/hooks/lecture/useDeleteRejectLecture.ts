import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../../../common'
import { lectureUrl } from '../../../../common'
import { del } from '../../../../common'
import { AxiosResponse } from 'axios'

export const useDeleteRejectLecture = (id: string) =>
  useMutation<AxiosResponse>(
    lectureQueryKeys.deleteLectureReject(id),
    () => del(lectureUrl.lectureReject(id), {}),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
