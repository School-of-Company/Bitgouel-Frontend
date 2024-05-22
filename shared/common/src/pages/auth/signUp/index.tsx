'use client'

import { SignUpPageNumber } from '@bitgouel/common'
import { useRecoilValue } from 'recoil'
import AuthTitleMenu from '../AuthTitleMenu'
import { AuthWrapper } from '../style'
import {
  SignUpPage1,
  SignUpPage2,
  SignUpPage3,
  SignUpSuccess,
} from './SignUpPages'
import * as S from './style'

const mainTitleList = ['만나서 반가워요!', '회원가입을 진행합니다', '얼마 안 남았어요!']
const subTitleList = ['어디서 오셨나요?', '본인의 인적 사항을 입력해 주세요!', '보안 요소를 입력해주세요']

const SignUpPage = () => {
  const signUpPage = useRecoilValue(SignUpPageNumber)
  return (
    <>
      {signUpPage === 4 && <SignUpSuccess />}
      {signUpPage < 4 && (
        <AuthWrapper>
          <AuthTitleMenu matchEl={signUpPage} mainTitleList={mainTitleList} subTitleList={subTitleList} />
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
