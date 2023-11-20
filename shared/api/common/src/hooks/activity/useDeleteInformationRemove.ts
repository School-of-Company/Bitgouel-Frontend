import { useMutation } from '@tanstack/react-query'
import { activityUrl } from '../../libs/urlController'
import { activityQueryKeys, del } from '../../libs'
import { AxiosResponse } from 'axios'

export const useDeleteInformationRemove = (activity_id: string) =>
  useMutation<AxiosResponse>(
    activityQueryKeys.deleteActivityInformationRemove(activity_id),
    () => del(activityUrl.activityInformationRemove(activity_id)),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
