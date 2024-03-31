import { activityQueryKeys, activityUrl, get } from '@bitgouel/api'
import { ActivityInformationTypes, ActivityOptionsTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetActivityMyselfList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<ActivityInformationTypes>>(
    activityQueryKeys.getActivityMyselfList(),
    () => get(activityUrl.activityMyselfList(queryString)),
    options
  )
