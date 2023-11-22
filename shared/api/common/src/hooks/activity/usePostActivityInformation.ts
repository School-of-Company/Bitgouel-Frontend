import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, post, activityUrl } from '../../libs'
import { AxiosResponse } from 'axios'

export const usePostActivityInformation = () =>
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
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
