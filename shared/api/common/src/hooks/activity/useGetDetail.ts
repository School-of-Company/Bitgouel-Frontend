import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityUrl } from '../../libs/urlController'
import { activityQueryKeys, get } from '../../libs'
import { AxiosResponse } from 'axios'

export const useGetLectureList = (
  activity_id: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse>(
    activityQueryKeys.getActivityInformationDetail()(activity_id),
    () => get(activityUrl.activityInformationDetail(activity_id)),
    options
  )
