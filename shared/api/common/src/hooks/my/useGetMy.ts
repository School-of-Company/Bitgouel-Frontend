import { get, myQueryKeys, userUrl } from '@bitgouel/api'
import { MyPageResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetMy = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<MyPageResponseTypes>>(
    myQueryKeys.getMy(),
    () => get(userUrl.user()),
    options
  )
