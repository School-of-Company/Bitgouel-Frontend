import { ApproveStatusEnum } from '../../../../common'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import {
  activityQueryKeys,
  get,
  activityUrl,
  ActivityOptionsTypes,
} from '../../../../common'
import { AxiosResponse } from 'axios'

interface ActivityMyselfItem {
  activityId: string
  title: string
  userId: string
  username: string
  approveStatus: ApproveStatusEnum
}

interface ActivityMyselfTypes {
  activities: {
    content: ActivityMyselfItem[]
  }
}

export const useGetActivityMyselfList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<ActivityMyselfTypes>>(
    activityQueryKeys.getActivityMyselfList(),
    () => get(activityUrl.activityMyselfList(queryString)),
    options
  )
