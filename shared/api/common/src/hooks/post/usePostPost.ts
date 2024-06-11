import { post, postQueryKeys, postUrl } from '@bitgouel/api'
import { ApiErrorTypes, PostCreatePayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostPost = (
  options?: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    PostCreatePayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, PostCreatePayloadTypes>(
    postQueryKeys.postBoardCreate(),
    (createValues) => post(postUrl.postCreate(), createValues),
    options
  )
