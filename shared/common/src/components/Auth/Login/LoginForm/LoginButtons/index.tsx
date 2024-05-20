'use client'

import { TokenManager } from '@bitgouel/api'
import {
  EmailValue,
  LoadingStateContext,
  PasswordValue
} from '@bitgouel/common'
import { useContext } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from './style'

interface Props {
  mutate: () => void
}

const LoginButtons = ({ mutate }: Props) => {
  const isLoading = useContext(LoadingStateContext)
  const emailValue = useRecoilValue(EmailValue)
  const passwordValue = useRecoilValue(PasswordValue)

  const disabled = (): boolean =>
    isLoading || !emailValue.length || !passwordValue.length
  const isAble = (): boolean =>
    !isLoading && emailValue !== '' && passwordValue !== ''

  return (
    <S.LoginButtonWrapper>
      <S.LoginButton
        disabled={disabled()}
        isAble={isAble()}
        onClick={mutate}
      >
        로그인
      </S.LoginButton>
    </S.LoginButtonWrapper>
  )
}

export default LoginButtons
