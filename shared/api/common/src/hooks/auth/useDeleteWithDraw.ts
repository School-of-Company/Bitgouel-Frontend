import { authQueryKeys, authUrl, del } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

export const useDeleteWithDraw = (options?: UseMutationOptions) =>
  useMutation(
    authQueryKeys.deleteWithDraw(),
    () => del(authUrl.withdraw()),
    options
  )
