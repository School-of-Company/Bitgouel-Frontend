import { ActivityOptionsTypes } from './../../types/libs/ActivityOptionsTypes'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityQueryKeys, get, activityUrl } from '../../libs'
import { AxiosResponse } from 'axios'

export const useGetActivityInformationList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse>(
    activityQueryKeys.getActivityInformationList(),
    () => get(activityUrl.activityInformationList(queryString)),
    options
  )
