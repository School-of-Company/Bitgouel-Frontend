'use client'

import { SignUpPageNumber } from '@bitgouel/common'
import { useRecoilValue } from 'recoil'
import { match } from 'ts-pattern'
import {
  SignUpPage1,
  SignUpPage2,
  SignUpPage3,
  SignUpSuccess,
} from './SignUpPages'
import * as S from './style'
import SignUpTitle from './SignUpTitle'

const SignUpPage = () => {
  const signUpPage = useRecoilValue(SignUpPageNumber)

  return (
    <>
      {signUpPage === 4 && <SignUpSuccess />}
      {signUpPage < 4 && (
        <S.SignUpWrapper>
          <SignUpTitle />
          <S.SignUpFormContainer>
            {signUpPage === 1 && <SignUpPage1 />}
            {signUpPage === 2 && <SignUpPage2 />}
            {signUpPage === 3 && <SignUpPage3 />}
          </S.SignUpFormContainer>
        </S.SignUpWrapper>
      )}
    </>
  )
}

export default SignUpPage
