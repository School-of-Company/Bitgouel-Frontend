'use client'

import {
  EmailValue,
  LoadingStateContext,
  PasswordValue
} from '@bitgouel/common'
import { useContext } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const LoginButton = () => {
  const isLoading = useContext(LoadingStateContext)
  const emailValue = useRecoilValue(EmailValue)
  const passwordValue = useRecoilValue(PasswordValue)

  const isAble = (): boolean =>
    !isLoading && emailValue !== '' && passwordValue !== ''

  return (
    <S.LoginButtonWrapper>
      <S.LoginButton
        disabled={!isAble()}
        isAble={isAble()}
        type='submit'
      >
        로그인
      </S.LoginButton>
    </S.LoginButtonWrapper>
  )
}

export default LoginButton
