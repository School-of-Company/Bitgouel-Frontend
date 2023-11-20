import { useMutation } from '@tanstack/react-query'
import { activityUrl } from '../../libs/urlController'
import { activityQueryKeys, patch } from '../../libs'
import { AxiosResponse } from 'axios'

export const usePatchActivityApprove = (activity_id: string) =>
  useMutation<AxiosResponse>(
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
