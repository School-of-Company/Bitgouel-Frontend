import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityQueryKeys, get, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { ActivityOptionsTypes, ActivityMyselfTypes } from '@bitgouel/types'

export const useGetActivityMyselfList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<ActivityMyselfTypes>>(
    activityQueryKeys.getActivityMyselfList(),
    () => get(activityUrl.activityMyselfList(queryString)),
    options
  )
