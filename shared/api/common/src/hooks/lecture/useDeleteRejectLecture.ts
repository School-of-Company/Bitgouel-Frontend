import { useMutation } from '@tanstack/react-query'
import { del, lectureQueryKeys, lectureUrl } from '../../libs'
import { AxiosResponse } from 'axios'

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
