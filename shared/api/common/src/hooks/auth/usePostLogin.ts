'use client'

import {
  LoginErrorTypes,
  LoginPayloadTypes,
  LoginResponseTypes,
} from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { authQueryKeys, authUrl, post, TokenManager } from '../../libs'

export const usePostLogin = () => {
  const tokenManager = new TokenManager()
  const router = useRouter()

  return useMutation<
    AxiosResponse<LoginResponseTypes>,
    AxiosError<LoginErrorTypes>,
    LoginPayloadTypes
  >(
    authQueryKeys.postLogin(),
    (loginValues) => post(authUrl.login(), loginValues),
    {
      onSuccess: ({ data }) => {
        tokenManager.setTokens(data)
        return router.push('/')
      }
    }
  )
}
