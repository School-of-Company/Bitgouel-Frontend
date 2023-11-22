import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import {
  activityQueryKeys,
  get,
  activityUrl,
  ActivityOptionsTypes,
  ApproveStatusEnum,
} from '../../../../common'
import { AxiosResponse } from 'axios'

interface ActivityInformationItem {
  activityId: string
  title: string
  userId: string
  username: string
  approveStatus: ApproveStatusEnum
}

interface ActivityInformationTypes {
  activities: {
    content: ActivityInformationItem[]
  }
}

export const useGetActivityInformationList = (
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<ActivityInformationTypes>>(
    activityQueryKeys.getActivityInformationList(),
    () => get(activityUrl.activityInformationList(queryString)),
    options
  )
