'use client'

import { TokenManager, usePostLogin } from '@bitgouel/api'
import {
  EmailErrorText,
  EmailValue,
  LoadingStateContext,
  PasswordErrorText,
  PasswordValue,
} from '@bitgouel/common'
import { LoginPayloadTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import LoginButton from './LoginButton'
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
      400: () => setErrorText('', '잘못된 비밀번호입니다'),
    }

    if (status >= 500) return toast.error('서버 오류가 발생했습니다')

    const inputStatus = statusMap[status]
    if (inputStatus) inputStatus()
  }

  const { push } = useRouter()
  const { mutate, isLoading } = usePostLogin({
    onSuccess: (data) => {
      const tokenManager = new TokenManager()
      if (!isAdmin && data.authority === 'ROLE_ADMIN')
        return toast.warning('사용자 계정으로 로그인 해주세요')
      else if (isAdmin && data.authority !== 'ROLE_ADMIN')
        return toast.warning('관리자 계정으로 로그인 해주세요')
      tokenManager.setTokens(data)
      toast.success('로그인 되었습니다')
      if (isAdmin && data.authority === 'ROLE_ADMIN') return push(`/`)
      push(`/`)
    },
    onError: ({ response }) => response && handleLoginError(response.status),
  })

  const onLogin = (e?: FormEvent) => {
    e?.preventDefault()
    const loginValues: LoginPayloadTypes = {
      email: emailValue,
      password: passwordValue,
    }

    mutate(loginValues)
  }

  return (
    <LoadingStateContext.Provider value={isLoading}>
      <form onSubmit={onLogin}>
        <LoginInput />
        <LoginButton onLogin={onLogin} />
      </form>
    </LoadingStateContext.Provider>
  )
}

export default LoginForm
