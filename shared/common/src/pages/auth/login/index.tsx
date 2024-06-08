'use client'

import {
  LoginForm,
  LoginBottom
} from '@bitgouel/common'
import AuthFormTitle from '../AuthFormTitle'
import { AuthWrapper } from '../style'

const LoginPage = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <AuthWrapper>
      <AuthFormTitle />
      <LoginForm isAdmin={isAdmin} />
      <LoginBottom />
    </AuthWrapper>
  )
}

export default LoginPage
