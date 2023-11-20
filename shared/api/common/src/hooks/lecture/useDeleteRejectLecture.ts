import { useMutation } from '@tanstack/react-query'
import { lectureUrl } from '../../libs/urlController'
import { del, lectureQueryKeys } from '../../libs'
import { AxiosResponse } from 'axios'

export const useDeleteRejectLecture = (id: string) =>
  useMutation<AxiosResponse>(
    lectureQueryKeys.deleteLectureReject(id),
    () => del(lectureUrl.lectureReject(id)),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
