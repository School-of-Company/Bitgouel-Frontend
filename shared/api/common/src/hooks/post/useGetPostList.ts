import { get, postQueryKeys, postUrl } from '@bitgouel/api'
import { PostListOptionsTypes, PostListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetPostList = (
  queryString: PostListOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<PostListResponseTypes>>(
    postQueryKeys.getBoardList(),
    () => get(postUrl.postList(queryString)),
    options
  )
