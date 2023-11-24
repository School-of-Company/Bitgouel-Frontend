import { MyPageResponseTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { myUrl, myQueryKeys, get } from '../../libs'

export const useGetMy = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<MyPageResponseTypes>>(
    myQueryKeys.getMy(),
    () => get(myUrl.my()),
    options
  )
