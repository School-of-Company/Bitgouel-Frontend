'use client'

import { TokenManager, usePostLogin } from '@bitgouel/api'
import {
  EmailErrorText,
  EmailValue,
  LoadingStateContext,
  PasswordErrorText,
  PasswordValue,
  encryptAES
} from '@bitgouel/common'
import { LoginPayloadTypes } from '@bitgouel/types'
import CryptoJS from 'crypto-js'
import { useRouter } from 'next/navigation'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import LoginButtons from './LoginButtons'
import LoginInput from './LoginInput'

const LoginForm = () => {
  const emailValue = useRecoilValue(EmailValue)
  const passwordValue = useRecoilValue(PasswordValue)
  const setEmailErrorText = useSetRecoilState(EmailErrorText)
  const setPasswordErrorText = useSetRecoilState(PasswordErrorText)
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const { mutate, isLoading } = usePostLogin({
    onSuccess: (data) => {
      tokenManager.setTokens(data)
      push(`/`)
    },
    onError: ({ response }) => {
      if (response?.status === 404) {
        setEmailErrorText('등록되지 않은 계정입니다.')
      } else if (response?.status === 403) {
        setEmailErrorText('아직 회원가입 대기중인 계정입니다')
      } else if (response?.status === 401) {
        setPasswordErrorText('비밀번호가 일치하지 않습니다')
      } else if (response?.status === 400) {
        if (
          Object.keys(response?.data.fieldError).includes('email') &&
          Object.keys(response?.data.fieldError).includes('password')
        ) {
          setEmailErrorText('잘못된 이메일입니다')
          setPasswordErrorText('잘못된 비밀번호입니다')
        } else if (
          Object.keys(response?.data.fieldError).includes('email') &&
          !Object.keys(response.data.fieldError).includes('password')
        ) {
          setEmailErrorText('잘못된 이메일입니다.')
          setPasswordErrorText('')
        } else if (
          Object.keys(response?.data.fieldError).includes('password') &&
          !Object.keys(response?.data.fieldError).includes('email')
        ) {
          setPasswordErrorText('잘못된 비밀번호입니다.')
          setEmailErrorText('')
        }
      }
    },
  })

  const onLogin = () => {
    const loginValues: LoginPayloadTypes = {
      email: emailValue,
      password: encryptAES(passwordValue),
    }
    mutate(loginValues)
  }

  return (
    <LoadingStateContext.Provider value={isLoading}>
      <LoginInput />
      <LoginButtons onLogin={onLogin} />
    </LoadingStateContext.Provider>
  )
}

export default LoginForm
