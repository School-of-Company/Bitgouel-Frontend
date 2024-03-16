import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityQueryKeys, get, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { ActivityDetailTypes } from '@bitgouel/types'

export const useGetActivityDetail = (
  activityId: string,
  options?: UseQueryOptions<AxiosResponse<ActivityDetailTypes>>
) =>
  useQuery<AxiosResponse>(
    activityQueryKeys.getActivityInformationDetail(activityId),
    () => get(activityUrl.activityInformationDetail(activityId)),
    options
  )
