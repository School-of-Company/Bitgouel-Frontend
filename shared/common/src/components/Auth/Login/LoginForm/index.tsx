'use client'

import { TokenManager, usePostLogin } from '@bitgouel/api'
import {
  EmailErrorText,
  EmailValue,
  LoadingStateContext,
  PasswordErrorText,
  PasswordValue,
} from '@bitgouel/common'
import { LoginErrorTypes, LoginPayloadTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import LoginButtons from './LoginButtons'
import LoginInput from './LoginInput'

const LoginForm = ({ isAdmin }: { isAdmin: boolean }) => {
  const emailValue = useRecoilValue(EmailValue)
  const passwordValue = useRecoilValue(PasswordValue)
  const setEmailErrorText = useSetRecoilState(EmailErrorText)
  const setPasswordErrorText = useSetRecoilState(PasswordErrorText)

  const handleLoginError = (status: number) => {
    const setErrorText = (emailError = '', passwordError = '') => {
      setEmailErrorText(emailError)
      setPasswordErrorText(passwordError)
    }

    const statusMap = {
      404: () => setErrorText('등록되지 않은 계정입니다'),
      403: () => setErrorText('아직 회원가입 대기중인 계정입니다'),
      401: () => setErrorText('', '비밀번호가 일치하지 않습니다'),
    }

    if (status >= 500) return toast.error('서버 오류가 발생했습니다')

    const inputStatus = statusMap[status]
    if (inputStatus) inputStatus()
  }
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const { mutate, isLoading } = usePostLogin({
    onSuccess: (data) => {
      tokenManager.setTokens(data)
      if (!isAdmin && tokenManager.authority === 'ROLE_ADMIN') {
        toast.warning('사용자 계정으로 로그인 해주세요')
        return tokenManager.removeTokens()
      } else if (isAdmin && tokenManager.authority !== 'ROLE_ADMIN') {
        toast.warning('관리자 계정으로 로그인 해주세요')
        return tokenManager.removeTokens()
      }
      push(`/`)
    },
    onError: ({ response }) => response && handleLoginError(response.status),
  })

  const onLogin = () => {
    const loginValues: LoginPayloadTypes = {
      email: emailValue,
      password: passwordValue,
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
