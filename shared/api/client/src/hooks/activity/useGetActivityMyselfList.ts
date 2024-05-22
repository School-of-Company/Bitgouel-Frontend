import { activityQueryKeys, activityUrl, get } from '@bitgouel/api'
import { ActivityInformationTypes, ActivityOptionsTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { Axios, AxiosError, AxiosResponse } from 'axios'

export const useGetActivityMyselfList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<ActivityInformationTypes>
) =>
  useQuery<ActivityInformationTypes, AxiosError>(
    activityQueryKeys.getActivityMyselfList(),
    () => get(activityUrl.activityMyselfList(queryString)),
    options
  )
