import { TokenResponseType } from './../../../../../types/src/tokenResponseType'

import { useMutation } from '@tanstack/react-query'

import { authQueryKeys } from './../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { patch } from '../../libs'

export const usePatchAccessToken = () =>
  useMutation<TokenResponseType>(
    authQueryKeys.patchAccessToken(),
    () =>
      patch(
        authUrl.auth(),
        {},
        {
          headers: {
            RefreshToken: `Bearer ${localStorage.getItem('refresh_token')}`,
          },
        }
      ),
    {
      onSuccess: (data) => {
        //Token Local 저장
        localStorage.setItem('refresh_token', data.refreshToken)
        localStorage.setItem('access_token', data.accessToken)
      },
    }
  )
