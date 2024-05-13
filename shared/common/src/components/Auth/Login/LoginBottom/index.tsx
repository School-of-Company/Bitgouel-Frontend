import {
  SignUpPage1Obj,
  SignUpPage2Obj,
  SignUpPage3Obj,
  SignUpPageNumber,
} from '@bitgouel/common'
import { useRouter } from 'next/router'
import { useResetRecoilState } from 'recoil'
import * as S from './style'

const LoginBottom = () => {
  const { push } = useRouter()

  const locationSignUp = () => {
    const resetPage = useResetRecoilState(SignUpPageNumber)
    const resetPage1Obj = useResetRecoilState(SignUpPage1Obj)
    const resetPage2Obj = useResetRecoilState(SignUpPage2Obj)
    const resetPage3Obj = useResetRecoilState(SignUpPage3Obj)

    resetPage()
    resetPage1Obj()
    resetPage2Obj()
    resetPage3Obj()
    push(`/auth/signUp`)
  }
  return (
    <S.JoinWrapper>
      <S.JoinContainer>
        <S.MenuItem>또는</S.MenuItem>
        <div>
          <S.NoAccountItem>계정이 없으신가요?</S.NoAccountItem>
          <S.UserJoinItem onClick={locationSignUp}>회원가입</S.UserJoinItem>
        </div>
      </S.JoinContainer>
    </S.JoinWrapper>
  )
}

export default LoginBottom
