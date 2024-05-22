import { adminQueryKeys, adminUrl, get } from '@bitgouel/api'
import { WithdrawListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetWithDrawUserList = (
  cohort: string,
  options?: UseQueryOptions<WithdrawListResponseTypes>
) =>
  useQuery<WithdrawListResponseTypes, AxiosError>(
    adminQueryKeys.getWithdrawUserList(),
    () => get(adminUrl.withDrawUserList(cohort)),
    options
  )
