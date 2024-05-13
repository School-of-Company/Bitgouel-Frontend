'use client'

import {
  LoginForm,
  LoginBottom
} from '@bitgouel/common'
import AuthFormTitle from '../AuthFormTitle'
import { AuthWrapper } from '../style'

const LoginPage = () => {
  return (
    <AuthWrapper>
      <AuthFormTitle />
      <LoginForm />
      <LoginBottom />
    </AuthWrapper>
  )
}

export default LoginPage
