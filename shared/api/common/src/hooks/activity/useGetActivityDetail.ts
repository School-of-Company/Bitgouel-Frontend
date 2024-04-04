import { activityQueryKeys, activityUrl, get } from '@bitgouel/api'
import { ActivityDetailTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetActivityDetail = (
  activityId: string,
  options?: UseQueryOptions<AxiosResponse<ActivityDetailTypes>>
) =>
  useQuery<AxiosResponse<ActivityDetailTypes>>(
    activityQueryKeys.getActivityInformationDetail(activityId),
    () => get(activityUrl.activityInformationDetail(activityId)),
    options
  )
