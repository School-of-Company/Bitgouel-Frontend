'use client'

import {
  LoginForm
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
