import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityQueryKeys, get, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { ActivityDetailTypes } from '@bitgouel/types'

export const useGetActivityDetail = (
  activity_id: string,
  options?: UseQueryOptions<AxiosResponse<ActivityDetailTypes>>
) =>
  useQuery<AxiosResponse>(
    activityQueryKeys.getActivityInformationDetail()(activity_id),
    () => get(activityUrl.activityInformationDetail(activity_id)),
    options
  )
