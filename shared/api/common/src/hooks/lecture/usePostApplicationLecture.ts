import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys, post, lectureUrl } from '../../libs'
import { AxiosResponse } from 'axios'

export const usePostApplicationLecture = (id: string) =>
  useMutation<AxiosResponse>(
    lectureQueryKeys.postLectureApplication(id),
    () => post(lectureUrl.lectureApplication(id), {}),
    {
      onSuccess: (response) => {
        console.log(response)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
