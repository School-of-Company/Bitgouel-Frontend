import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, patch, activityUrl } from '../../libs'
import { AxiosResponse } from 'axios'

export const usePatchActivityCorrection = (activity_id: string) =>
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
    activityQueryKeys.patchActivityCorrection(activity_id),
    () => patch(activityUrl.activityCorrection(activity_id), {}),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
