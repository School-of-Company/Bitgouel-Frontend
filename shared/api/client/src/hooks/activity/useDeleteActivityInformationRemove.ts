import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, del, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'

export const useDeleteInformationRemove = (activity_id: string) =>
  useMutation<AxiosResponse, Error>(
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
