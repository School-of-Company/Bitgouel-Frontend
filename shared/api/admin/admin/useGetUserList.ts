import { UserListOptionsTypes, UserListResponseTypes } from '@bitgouel/types'
import { adminQueryKeys, adminUrl, get } from '@bitgouel/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetUserList = (
  queryString: UserListOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<UserListResponseTypes>>(
    adminQueryKeys.getUserList(),
    () => get(adminUrl.userList(queryString)),
    options
  )
