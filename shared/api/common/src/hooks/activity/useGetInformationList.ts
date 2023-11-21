import { ActivityOptionsTypes } from './../../types/libs/ActivityOptionsTypes'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityUrl } from '../../libs/urlController'
import { activityQueryKeys, get } from '../../libs'
import { AxiosResponse } from 'axios'

export const useGetInformationList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse>(
    activityQueryKeys.getActivityInformationList(),
    () => get(activityUrl.activityInformationList(queryString)),
    options
  )
