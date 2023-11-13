import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { patch } from '../../libs'
import TokenManager from '../../libs/api/TokenManager'
import { AxiosResponse } from 'axios'

export const usePatchApproveLecture = (id: string) =>
  useMutation<AxiosResponse>(
    lectureQueryKeys.patchLectureApprove(id),
    () => patch(lectureUrl.lectureApprove(id), {}),
    {
      onSuccess: (response) => {
        console.log(response.data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
