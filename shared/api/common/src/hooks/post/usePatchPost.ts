import { patch, postQueryKeys, postUrl } from '@bitgouel/api'
import { PostPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchPostModify = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, PostPayloadTypes>
) =>
  useMutation<void, AxiosError, Omit<PostPayloadTypes, 'feedType'>>(
    postQueryKeys.patchBoardModify(id),
    (modifyValues) => patch(postUrl.postModify(id), modifyValues),
    options
  )
