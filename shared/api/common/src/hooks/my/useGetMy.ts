import { get, myQueryKeys, userUrl } from '@bitgouel/api'
import { MyPageResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetMy = (options?: UseQueryOptions<MyPageResponseTypes>) =>
  useQuery<MyPageResponseTypes, AxiosError>(
    myQueryKeys.getMy(),
    () => get(userUrl.user()),
    options
  )
