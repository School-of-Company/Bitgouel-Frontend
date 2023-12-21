import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, patch, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'

export const usePatchActivityApprove = (activity_id: string) =>
  useMutation<AxiosResponse, Error>(
    activityQueryKeys.patchActivityApprove(activity_id),
    () => patch(activityUrl.activityApprove(activity_id), {}),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
