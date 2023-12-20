import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, del, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'

export const useDeleteRejectActivity = (activity_id: string) =>
  useMutation<AxiosResponse, Error>(
    activityQueryKeys.deleteActivityReject(activity_id),
    () => del(activityUrl.activityReject(activity_id)),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
