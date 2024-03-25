import { adminQueryKeys, adminUrl, get } from '@bitgouel/api'
import { WithdrawListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetWithDrawUserList = (
  cohort: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<WithdrawListResponseTypes>>(
    adminQueryKeys.getWithdrawUserList(),
    () => get(adminUrl.withDrawUserList(cohort)),
    options
  )
