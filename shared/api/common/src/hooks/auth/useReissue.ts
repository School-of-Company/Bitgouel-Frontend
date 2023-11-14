import { useMutation } from '@tanstack/react-query'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { patch } from '../../libs'
import TokenManager from '../../libs/api/TokenManager'
import { AxiosError, AxiosResponse } from 'axios'
import Route from 'next/router'

export const useReissue = () => {
  const tokenManager = new TokenManager()

  return useMutation<AxiosResponse, AxiosError>(
    authQueryKeys.patchReissue(),
    () =>
      patch(
        authUrl.auth(),
        {},
        {
          headers: {
            RefreshToken:
              tokenManager.refreshToken &&
              `Bearer ${tokenManager.refreshToken}`,
          },
        }
      ),
    {
      onSuccess: ({ data }) => {
        tokenManager.setTokens(data)
      },
      onError: (error) => {
        tokenManager.removeTokens()
        return Route.push('/auth/login')
      },
    }
  )
}
