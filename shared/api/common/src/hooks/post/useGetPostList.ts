import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { postQueryKeys } from '../../libs/queryKeys'
import { postUrl } from '../../libs/urlController'
import { get } from '../../libs'
import { AxiosResponse } from 'axios'
import { PostListOptionsTypes, PostListResponseTypes } from '@bitgouel/types'

export const useGetPostList = (
  queryString: PostListOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<PostListResponseTypes>>(
    postQueryKeys.getBoardList(),
    () => get(postUrl.postList(queryString)),
    options
  )
  
