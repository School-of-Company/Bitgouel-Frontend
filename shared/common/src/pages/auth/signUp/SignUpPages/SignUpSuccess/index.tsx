'use client'

import { useRouter } from 'next/navigation'
import AuthFormTitle from '../../../AuthFormTitle'
import { AuthWrapper } from '../../../style'
import * as S from './style'

const SignUpSuccess = () => {
  const { push } = useRouter()

  return (
    <AuthWrapper>
     <AuthFormTitle />
      <S.AuthSuccessWrapper>
        <S.SignUpContainer>
          <S.MainTitle>회원가입 완료</S.MainTitle>
          <S.ViceTitle>관리자의 승인을 기다려주세요!</S.ViceTitle>
        </S.SignUpContainer>
      </S.AuthSuccessWrapper>
      <S.BackButtonContainer>
        <S.BackButton onClick={() => push(`/auth/login`)}>
          돌아가기
        </S.BackButton>
      </S.BackButtonContainer>
    </AuthWrapper>
  )
}

export default SignUpSuccess
