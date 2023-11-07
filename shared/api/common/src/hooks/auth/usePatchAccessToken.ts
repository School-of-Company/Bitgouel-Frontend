import { useMutation } from '@tanstack/react-query'
import { authQueryKeys } from './../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { patch } from '../../libs'
import TokenManager from '../../libs/api/TokenManager'
import { AxiosResponse } from 'axios'
import Route from 'next/router'

const tokenManager = new TokenManager()

export const usePatchAccessToken = () =>
  useMutation<AxiosResponse>(
    authQueryKeys.patchAccessToken(),
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
