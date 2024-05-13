'use client'

import { SignUpPageNumber } from '@bitgouel/common'
import { useRecoilValue } from 'recoil'
import { AuthWrapper } from '../style'
import {
  SignUpPage1,
  SignUpPage2,
  SignUpPage3,
  SignUpSuccess,
} from './SignUpPages'
import SignUpTitle from './SignUpTitle'
import * as S from './style'

const SignUpPage = () => {
  const signUpPage = useRecoilValue(SignUpPageNumber)

  return (
    <>
      {signUpPage === 4 && <SignUpSuccess />}
      {signUpPage < 4 && (
        <AuthWrapper>
          <SignUpTitle />
          <S.SignUpFormContainer>
            {signUpPage === 1 && <SignUpPage1 />}
            {signUpPage === 2 && <SignUpPage2 />}
            {signUpPage === 3 && <SignUpPage3 />}
          </S.SignUpFormContainer>
        </AuthWrapper>
      )}
    </>
  )
}

export default SignUpPage
