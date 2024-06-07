'use client'

import { SignUpPage1Obj, SignUpPage2Obj, SignUpPage3Obj, SignUpPageNumber, useSignUp } from '@bitgouel/common'
import { FormEvent } from 'react'
import { useRecoilValue } from 'recoil'
import AuthTitleMenu from '../AuthTitleMenu'
import { AuthWrapper } from '../style'
import { SignUpPage1, SignUpPage2, SignUpPage3, SignUpSuccess } from './SignUpPages'
import * as S from './style'

const mainTitleList = ['만나서 반가워요!', '회원가입을 진행합니다', '얼마 안 남았어요!']
const subTitleList = ['어디서 오셨나요?', '본인의 인적 사항을 입력해 주세요!', '보안 요소를 입력해주세요']

const SignUpPage = () => {
  const signUpPage = useRecoilValue(SignUpPageNumber)
  const signUpPage1Obj = useRecoilValue(SignUpPage1Obj)
  const signUpPage2Obj = useRecoilValue(SignUpPage2Obj)
  const signUpPage3Obj = useRecoilValue(SignUpPage3Obj)

  const isNextPage = {
    1: signUpPage1Obj.every((item) => item.value.length),
    2: signUpPage2Obj.every((item) => item.value.length),
    3: signUpPage3Obj.every((item) => item.value.length)
  }

  const [onNext] = useSignUp({ isNext: isNextPage[signUpPage] })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <>
      {signUpPage === 4 && <SignUpSuccess />}
      {signUpPage < 4 && (
        <AuthWrapper>
          <AuthTitleMenu matchEl={signUpPage} mainTitleList={mainTitleList} subTitleList={subTitleList} />
          <S.SignUpFormContainer onSubmit={onSubmit}>
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
