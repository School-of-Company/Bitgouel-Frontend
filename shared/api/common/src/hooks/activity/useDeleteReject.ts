import { useMutation } from '@tanstack/react-query'
import { activityUrl } from '../../libs/urlController'
import { activityQueryKeys, del } from '../../libs'
import { AxiosResponse } from 'axios'

export const useDeleteRejectLecture = (activity_id: string) =>
  useMutation<AxiosResponse>(
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
