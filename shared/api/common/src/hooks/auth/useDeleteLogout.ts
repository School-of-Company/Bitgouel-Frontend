import { TokenManager, authQueryKeys, authUrl, del } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

export const useDeleteLogout = (options?: UseMutationOptions) => {
  const tokenManager = new TokenManager()

  return useMutation(
    authQueryKeys.deleteLogout(),
    () =>
      del(authUrl.auth(), {
        headers: {
          RefreshToken: `Bearer ${tokenManager.refreshToken}`,
          Authorization: `Bearer ${tokenManager.accessToken}`,
        },
      }),
    options
  )
}
