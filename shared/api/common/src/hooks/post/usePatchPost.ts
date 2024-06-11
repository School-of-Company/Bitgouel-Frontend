import { patch, postQueryKeys, postUrl } from '@bitgouel/api'
import { PostModifyPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchPostModify = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, PostModifyPayloadTypes>
) =>
  useMutation<void, AxiosError, PostModifyPayloadTypes>(
    postQueryKeys.patchBoardModify(id),
    (modifyValues) => patch(postUrl.postModify(id), modifyValues),
    options
  )
