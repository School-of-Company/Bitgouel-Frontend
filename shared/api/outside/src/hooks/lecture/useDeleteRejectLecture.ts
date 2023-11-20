import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../../../common'
import { lectureUrl } from '../../../../common'
import { del } from '../../../../common'
import { AxiosResponse, AxiosError } from 'axios'

export const useDeleteRejectLecture = (id: string) =>
  useMutation<AxiosResponse, AxiosError>(
    lectureQueryKeys.deleteLectureReject(id),
    () => del(lectureUrl.lectureReject(id), {}),
    {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
