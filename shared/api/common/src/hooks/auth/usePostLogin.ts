'use client'

import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { AxiosError, AxiosResponse } from 'axios'
import TokenManager from '../../libs/api/TokenManager'
import { useRouter } from 'next/navigation'

export const usePostLogin = () => {
  const tokenManager = new TokenManager()
  const router = useRouter()

  return useMutation<
    AxiosResponse,
    AxiosError,
    { email: string; password: string }
  >(
    authQueryKeys.postLogin(),
    (loginValues) => post(authUrl.login(), loginValues),
    {
      onSuccess: ({ data }) => {
        tokenManager.setTokens(data)
        return router.push('/')
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
}
