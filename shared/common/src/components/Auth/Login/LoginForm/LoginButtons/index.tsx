'use client'

import {
  EmailValue,
  LoadingStateContext,
  PasswordValue
} from '@bitgouel/common'
import { FormEvent, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from './style'

interface Props {
  onLogin: (e?: FormEvent) => void
}

const LoginButtons = ({ onLogin }: Props) => {
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
        onClick={onLogin}
      >
        로그인
      </S.LoginButton>
    </S.LoginButtonWrapper>
  )
}

export default LoginButtons
