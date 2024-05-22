import { activityQueryKeys, activityUrl, get } from '@bitgouel/api'
import { ActivityInformationTypes, ActivityOptionsTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetActivityList = (
  studentId: string,
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<ActivityInformationTypes>
) =>
  useQuery<ActivityInformationTypes, AxiosError>(
    activityQueryKeys.getActivityList(studentId),
    () => get(activityUrl.activityList(studentId, queryString)),
    options
  )
