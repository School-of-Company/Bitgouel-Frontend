'use client'

import { useDeleteLogout } from '@bitgouel/api'
import { PwPage } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useResetRecoilState } from 'recoil'
import { AuthWrapper } from '../../../style'
import * as S from './style'
import AuthFormTitle from '../../../AuthFormTitle'

const SignUpSuccess = () => {
  const { push } = useRouter()
  const { mutate } = useDeleteLogout()
  const resetPwPage = useResetRecoilState(PwPage)

  const finish = () => {
    push(`/auth/login`)
    mutate()
    resetPwPage()
  }

  return (
    <AuthWrapper>
      <AuthFormTitle />
      <S.SignUpWrapper>
        <S.SignUpContainer>
          <S.MainTitle>비밀번호 변경 완료</S.MainTitle>
          <S.ViceTitle>다시 로그인 해야 합니다.</S.ViceTitle>
        </S.SignUpContainer>
      </S.SignUpWrapper>
      <S.BackButtonContainer>
        <S.BackButton onClick={finish}>돌아가기</S.BackButton>
      </S.BackButtonContainer>
    </AuthWrapper>
  )
}

export default SignUpSuccess
