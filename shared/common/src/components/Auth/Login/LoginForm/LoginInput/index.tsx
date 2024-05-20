'use client'

import { LoadingStateContext } from '@bitgouel/common'
import { useContext } from 'react'
import Email from './Email'
import Password from './Password'
import PasswordText from './PasswordText'
import * as S from './style'

const LoginInput = () => {
  const loadingStateContext = useContext(LoadingStateContext)
  return (
    <S.InputWrapper>
      <S.InputContainer>
        <Email isLoading={loadingStateContext} />
        <Password isLoading={loadingStateContext} />
      </S.InputContainer>
      <PasswordText />
    </S.InputWrapper>
  )
}

export default LoginInput
