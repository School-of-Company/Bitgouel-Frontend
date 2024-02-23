import { AxiosResponse } from 'axios'
import { adminQueryKeys, adminUrl, get } from '../../common'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { UserListResponseTypes } from '@bitgouel/types'

export const useGetWithDrawUserList = (
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<UserListResponseTypes>>(
    adminQueryKeys.getWithdrawUserList(),
    () => get(adminUrl.withDrawUserList()),
    options
  )
