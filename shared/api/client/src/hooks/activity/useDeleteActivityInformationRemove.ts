import { activityQueryKeys, activityUrl, del } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteInformationRemove = (
  activity_id: string,
  options?: UseMutationOptions
) =>
  useMutation<void, AxiosError>(
    activityQueryKeys.deleteActivityInformationRemove(activity_id),
    () => del(activityUrl.activityInformationRemove(activity_id)),
    options
  )
