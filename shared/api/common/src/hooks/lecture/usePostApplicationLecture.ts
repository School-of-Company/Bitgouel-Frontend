import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { patch } from '../../libs'
import TokenManager from '../../libs/api/TokenManager'
import { AxiosResponse } from 'axios'

const tokenManager = new TokenManager()

export const usePostApplicationLecture = (id: string) =>
  useMutation<AxiosResponse>(
    lectureQueryKeys.postLectureApplication(id),
    () =>
      patch(
        lectureUrl.lectureApplication(id),
        // {},
        {
          headers: {
            Authorization:
              tokenManager.accessToken && `Bearer ${tokenManager.accessToken}`,
          },
        }
      ),
    {
      onSuccess: (response) => {
        console.log(response)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
