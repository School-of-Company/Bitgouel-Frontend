import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { postQueryKeys } from '../../libs/queryKeys'
import { postUrl } from '../../libs/urlController'
import { get } from '../../libs'
import { AxiosResponse } from 'axios'
import { PostDetailResponseTypes } from '@bitgouel/types'

export const useGetPostDetail = (
  id: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<PostDetailResponseTypes>>(
    postQueryKeys.getBoardDetail(id),
    () => get(postUrl.postDetail(id)),
    options
  )
  
