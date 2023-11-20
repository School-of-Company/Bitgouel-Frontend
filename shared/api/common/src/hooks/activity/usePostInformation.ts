import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys } from '../../libs/queryKeys'
import { activityUrl } from '../../libs/urlController'
import { post } from '../../libs'
import { AxiosResponse } from 'axios'

export const usePostInformation = () =>
  useMutation<
    AxiosResponse,
    Error,
    {
      title: string
      content: string
      credit: number
      activityDate: string
    }
  >(
    activityQueryKeys.postActivityInformation(),
    () => post(activityUrl.activityInformation(), {}),
    {
      onSuccess: (response) => {
        console.log(response)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
