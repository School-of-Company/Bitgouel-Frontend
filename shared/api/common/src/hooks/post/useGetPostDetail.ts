import { get, postQueryKeys, postUrl } from '@bitgouel/api'
import { PostDetailResponseTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetPostDetail = (
  id: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<PostDetailResponseTypes>>(
    postQueryKeys.getBoardDetail(id),
    () => get(postUrl.postDetail(id)),
    options
  )
  
