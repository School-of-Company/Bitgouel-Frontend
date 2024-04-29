import { get, postQueryKeys, postUrl } from '@bitgouel/api'
import { PostDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetPostDetail = (
  id: string,
  options?: UseQueryOptions<PostDetailResponseTypes>
) =>
  useQuery<PostDetailResponseTypes, AxiosError>(
    postQueryKeys.getBoardDetail(id),
    () => get(postUrl.postDetail(id)),
    options
  )
