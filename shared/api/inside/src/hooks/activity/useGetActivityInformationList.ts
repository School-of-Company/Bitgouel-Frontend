import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { activityQueryKeys, get, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import {
  ActivityInformationResponseTypes,
  ActivityOptionsTypes,
} from '@bitgouel/types'

export const useGetActivityInformationList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<ActivityInformationResponseTypes>>(
    activityQueryKeys.getActivityInformationList(),
    () => get(activityUrl.activityInformationList(queryString)),
    options
  )
