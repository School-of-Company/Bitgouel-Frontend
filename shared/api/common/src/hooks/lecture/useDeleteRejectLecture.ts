import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../'
import { lectureUrl } from '../../libs/urlController'
import { del } from '../../libs'
import { AxiosError, AxiosResponse } from 'axios'

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
