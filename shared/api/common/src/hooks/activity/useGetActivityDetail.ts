import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityQueryKeys, get, activityUrl } from '../../libs'
import { AxiosResponse } from 'axios'

export const useGetActivityDetail = (
  activity_id: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse>(
    activityQueryKeys.getActivityInformationDetail()(activity_id),
    () => get(activityUrl.activityInformationDetail(activity_id)),
    options
  )
