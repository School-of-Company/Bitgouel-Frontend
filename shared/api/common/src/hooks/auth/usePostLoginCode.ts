import { useMutation } from '@tanstack/react-query'

import { post } from '../../libs'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'

import { TokenResponseType } from './../../../../../types/src/tokenResponseType'

export const usePostLoginCode = () =>
  useMutation<TokenResponseType, Error, { email: string; password: string }>(
    authQueryKeys.postLoginCode(),
    (loginCode) => post(authUrl.auth(), loginCode),
    {
      onSuccess: (data) => {
        if (data.refreshToken)
          localStorage.setItem('refresh_token', data.refreshToken)
        if (data.accessToken)
          localStorage.setItem('access_token', data.accessToken)
      },
    }
  )
