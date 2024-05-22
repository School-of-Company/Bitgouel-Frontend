import { activityQueryKeys, activityUrl, get } from '@bitgouel/api'
import { ActivityDetailTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetActivityDetail = (
  activityId: string,
  options?: UseQueryOptions<ActivityDetailTypes>
) =>
  useQuery<ActivityDetailTypes, AxiosError>(
    activityQueryKeys.getActivityInformationDetail(activityId),
    () => get(activityUrl.activityInformationDetail(activityId)),
    options
  )
