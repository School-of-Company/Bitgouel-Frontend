import { useMutation } from '@tanstack/react-query'

import { authQueryKeys } from './../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { patch } from '../../libs'
import TokenManager from '@/common/src/libs/api/TokenManager'
import { useRouter } from 'next/navigation'
import { TokenResponseType } from '@/../types/src/tokenResponseType'

const tokenManager = new TokenManager()
const router = useRouter()

export const usePatchAccessToken = () =>
  useMutation<TokenResponseType>(
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
      onSuccess: (data) => {
        tokenManager.setTokens(data)
      },
      onError: (error) => {
        tokenManager.removeTokens()
        return router.push('/auth/login')
      },
    }
  )
