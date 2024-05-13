'use client'

import { TokenManager, usePostLogin } from '@bitgouel/api'
import {
  SignUpPage1Obj,
  SignUpPage2Obj,
  SignUpPage3Obj,
  SignUpPageNumber,
  ValueInput,
  theme,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { useResetRecoilState } from 'recoil'
import * as S from './style'
import { AuthWrapper } from '../style'

const LoginPage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [emailValue, setEmailValue] = useState<string>(
    isAdmin ? 's11111@gsm.hs.kr' : ''
  )
  const [emailErrorText, setEmailErrorText] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>(
    isAdmin ? '12345678a@' : ''
  )
  const [passwordErrorText, setPasswordErrorText] = useState<string>('')

  const resetPage = useResetRecoilState(SignUpPageNumber)
  const resetPage1Obj = useResetRecoilState(SignUpPage1Obj)
  const resetPage2Obj = useResetRecoilState(SignUpPage2Obj)
  const resetPage3Obj = useResetRecoilState(SignUpPage3Obj)
  const tokenManager = new TokenManager()
  const { push } = useRouter()
  const { mutate, isLoading } = usePostLogin({
    onSuccess: (data) => {
      tokenManager.setTokens(data)
      push(`/`)
    },
    onError: (error) => {
      if (error.status === 404) {
        setEmailErrorText('등록되지 않은 계정입니다')
      } else if (error.status === 403) {
        setEmailErrorText('아직 회원가입 대기중인 계정입니다')
      } else if (error.status === 401) {
        setPasswordErrorText('비밀번호가 일치하지 않습니다')
      } else if (error.status === 400) {
        if (
          Object.keys(error.fieldError).includes('email') &&
          Object.keys(error.fieldError).includes('password')
        ) {
          setEmailErrorText('잘못된 이메일입니다')
          setPasswordErrorText('잘못된 비밀번호입니다')
        } else if (
          Object.keys(error.fieldError).includes('email') &&
          !Object.keys(error.fieldError).includes('password')
        ) {
          setEmailErrorText('잘못된 이메일입니다.')
          setPasswordErrorText('')
        } else if (
          Object.keys(error.fieldError).includes('password') &&
          !Object.keys(error.fieldError).includes('email')
        ) {
          setPasswordErrorText('잘못된 비밀번호입니다.')
          setEmailErrorText('')
        }
      }
    },
  })

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setEmailValue(e.target.value)
    if (e.target.value === '') setEmailErrorText('')
    else if (!emailRegex.test(e.target.value))
      setEmailErrorText('잘못된 이메일입니다.')
    else setEmailErrorText('')
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,24}$/

    setPasswordValue(e.target.value)
    if (e.target.value === '') setPasswordErrorText('')
    else if (!passwordRegex.test(e.target.value))
      setPasswordErrorText('잘못된 비밀번호입니다.')
    else setPasswordErrorText('')
  }

  const locationSignUp = () => {
    resetPage()
    resetPage1Obj()
    resetPage2Obj()
    resetPage3Obj()
    push(`/auth/signUp`)
  }

  return (
    <AuthWrapper>
      <S.TitleWrapper>
        <S.TitleContainer>
          <S.TitleItemWrapper>
            <S.TitleItem>빛고을</S.TitleItem>
            <S.TitleItem>직업교육</S.TitleItem>
            <S.TitleItem>혁신지구</S.TitleItem>
          </S.TitleItemWrapper>
        </S.TitleContainer>
      </S.TitleWrapper>
      <S.InputWrapper>
        <S.InputContainer>
          <ValueInput
            type='text'
            value={emailValue}
            onChange={onEmailChange}
            placeholder='이메일'
            onClear={() => setEmailValue('')}
            length={emailValue.length}
            errorText={emailErrorText}
            isLoading={isLoading}
          />
          <ValueInput
            type='password'
            value={passwordValue}
            onChange={onPasswordChange}
            placeholder='비밀번호'
            length={passwordValue.length}
            onClear={() => setPasswordValue('')}
            style={{
              border: passwordErrorText
                ? `0.0625rem solid ${theme.color.error}`
                : `0.0625rem solid ${theme.color.gray['700']}`,
              color: passwordErrorText
                ? `${theme.color.error}`
                : isLoading
                ? `${theme.color.gray['700']}`
                : `${theme.color.black}`,
            }}
            isLoading={isLoading}
          />
        </S.InputContainer>
        <S.PasswordContainer>
          <S.MenuItem isError={passwordErrorText ? true : false}>
            {passwordErrorText ? passwordErrorText : '비밀번호를 잊으셨나요?'}
          </S.MenuItem>
          <S.PasswordSearch>비밀번호 찾기</S.PasswordSearch>
        </S.PasswordContainer>
      </S.InputWrapper>
      <S.LoginButtonWrapper>
        <S.LoginButton
          disabled={isLoading || !emailValue.length || !passwordValue.length}
          isAble={!isLoading && emailValue !== '' && passwordValue !== ''}
          onClick={() => mutate({ email: emailValue, password: passwordValue })}
        >
          로그인
        </S.LoginButton>
      </S.LoginButtonWrapper>
      <S.JoinWrapper>
        <S.JoinContainer>
          <S.MenuItem>또는</S.MenuItem>
          <div>
            <S.NoAccountItem>계정이 없으신가요?</S.NoAccountItem>
            <S.UserJoinItem onClick={locationSignUp}>회원가입</S.UserJoinItem>
          </div>
        </S.JoinContainer>
      </S.JoinWrapper>
    </AuthWrapper>
  )
}

export default LoginPage
