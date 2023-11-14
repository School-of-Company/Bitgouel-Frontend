import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { del } from '../../libs'
import { AxiosResponse } from 'axios'

export const useDeleteRejectLecture = (id: string) =>
  useMutation<AxiosResponse>(
    lectureQueryKeys.deleteLectureReject(id),
    () => del(lectureUrl.lectureReject(id), {}),
    {
      onSuccess: (response) => {
        console.log(response.data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
