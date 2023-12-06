'use client'

import { useMutation } from '@tanstack/react-query'
import { authQueryKeys, authUrl, post, TokenManager } from '../../libs'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import {
  LoginErrorTypes,
  LoginResponseTypes,
  LoginPayloadTypes,
} from '@bitgouel/types'
import { useSetRecoilState } from 'recoil'
import { Role } from '@bitgouel/common/src/atoms'

export const usePostLogin = () => {
  const tokenManager = new TokenManager()
  const { push } = useRouter()
  const setRole = useSetRecoilState(Role)

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
        setRole(data.authority)
        return push('/')
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
}
