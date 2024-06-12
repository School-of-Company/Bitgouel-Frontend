import { post, postQueryKeys, postUrl } from '@bitgouel/api'
import { ApiErrorTypes, PostPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostPost = (
  options?: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    PostPayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, PostPayloadTypes>(
    postQueryKeys.postBoardCreate(),
    (createValues) => post(postUrl.postCreate(), createValues),
    options
  )
