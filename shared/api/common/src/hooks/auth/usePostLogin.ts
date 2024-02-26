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
import { useSetRecoilState } from 'recoil'
import { EmailErrorText, PasswordErrorText } from '@bitgouel/common'

export const usePostLogin = () => {
  const tokenManager = new TokenManager()
  const router = useRouter()
  const setEmailErrorText = useSetRecoilState(EmailErrorText)
  const setPasswordErrorText = useSetRecoilState(PasswordErrorText)

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
      },
      onError: (error) => {
        if (error?.response?.status === 404) {
          setEmailErrorText('등록되지 않은 계정입니다')
        } else if (error?.response?.status === 403) {
          setEmailErrorText('아직 회원가입 대기중인 계정입니다')
        } else if (error?.response?.status === 401) {
          setPasswordErrorText('비밀번호가 일치하지 않습니다')
        } else if (error?.response?.status === 400) {
          if (
            Object.keys(error.response?.data.fieldError).includes('email') &&
            Object.keys(error.response?.data.fieldError).includes('password')
          ) {
            setEmailErrorText('잘못된 이메일입니다')
            setPasswordErrorText('잘못된 비밀번호입니다')
          } else if (
            Object.keys(error.response?.data.fieldError).includes('email') &&
            !Object.keys(error.response?.data.fieldError).includes('password')
          ) {
            setEmailErrorText('잘못된 이메일입니다.')
            setPasswordErrorText('')
          } else if (
            Object.keys(error.response?.data.fieldError).includes('password') &&
            !Object.keys(error.response?.data.fieldError).includes('email')
          ) {
            setPasswordErrorText('잘못된 비밀번호입니다.')
            setEmailErrorText('')
          }
        }
      }
    }
  )
}
