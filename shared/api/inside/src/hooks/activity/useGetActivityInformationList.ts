import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityQueryKeys, get, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { ActivityInformationTypes, ActivityOptionsTypes } from '@bitgouel/types'

export const useGetActivityInformationList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<ActivityInformationTypes>>(
    activityQueryKeys.getActivityInformationList(),
    () => get(activityUrl.activityInformationList(queryString)),
    options
  )
