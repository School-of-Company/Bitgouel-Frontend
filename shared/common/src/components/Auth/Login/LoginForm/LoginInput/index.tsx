'use client'

import { usePostLogin } from '@bitgouel/api'
import Email from './Email'
import Password from './Password'
import PasswordText from './PasswordText'
import * as S from './style'

const LoginInput = () => {
  const { isLoading } = usePostLogin()
  return (
    <S.InputWrapper>
      <S.InputContainer>
        <Email isLoading={isLoading} />
        <Password isLoading={isLoading} />
      </S.InputContainer>
      <PasswordText />
    </S.InputWrapper>
  )
}

export default LoginInput
