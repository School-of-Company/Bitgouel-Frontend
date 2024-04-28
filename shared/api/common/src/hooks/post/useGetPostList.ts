import { get, postQueryKeys, postUrl } from '@bitgouel/api'
import { PostListOptionsTypes, PostListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetPostList = (
  queryString: PostListOptionsTypes,
  options?: UseQueryOptions<PostListResponseTypes>
) =>
  useQuery<PostListResponseTypes, AxiosError>(
    postQueryKeys.getBoardList(),
    () => get(postUrl.postList(queryString)),
    options
  )
