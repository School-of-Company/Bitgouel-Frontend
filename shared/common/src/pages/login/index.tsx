'use client'

import * as S from './style'
import { ValueInput } from '../../components'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePostLogin } from '@bitgouel/api'
import { useResetRecoilState } from 'recoil'

import {
  Page,
  Page1Obj,
  Page2Obj,
  Page3Obj,
  PhoneCertificate,
  PhoneCertificateText,
  EmailCertificate,
  EmailCertificateText,
  IsPasswordRgx,
  IsValidate,
} from '../../atoms'

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState<string>('')
  const [emailErrorText, setEmailErrorText] = useState<string>('')

  const [passwordValue, setPasswordValue] = useState<string>('')
  const [passwordErrorText, setPasswordErrorText] = useState<string>('')

  const resetPage = useResetRecoilState(Page)
  const resetPage1Obj = useResetRecoilState(Page1Obj)
  const resetPage2Obj = useResetRecoilState(Page2Obj)
  const resetPage3Obj = useResetRecoilState(Page3Obj)
  const resetPhoneCertificate = useResetRecoilState(PhoneCertificate)
  const resetPhoneCertificateText = useResetRecoilState(PhoneCertificateText)
  const resetEmailCertificate = useResetRecoilState(EmailCertificate)
  const resetEmailCertificateText = useResetRecoilState(EmailCertificateText)
  const resetIsPasswordRgx = useResetRecoilState(IsPasswordRgx)
  const resetIsValidate = useResetRecoilState(IsValidate)

  const router = useRouter()
  const { mutate, error, isLoading } = usePostLogin()

  const onLogin = () => {
    mutate({ email: emailValue, password: passwordValue })

    if (error?.response?.status === 404) {
      setEmailErrorText('등록되지 않은 계정입니다')
    } else if (error?.response?.status === 403) {
      setEmailErrorText('아직 회원가입 대기중인 계정입니다')
    } else if (error?.response?.status === 401) {
      setPasswordErrorText('잘못된 비밀번호입니다.')
    } else if (error?.response?.status === 400) {
      if (
        Object.keys(error.response.data.fieldError).includes('email') &&
        Object.keys(error.response.data.fieldError).includes('password')
      ) {
        setEmailErrorText('잘못된 이메일입니다')
        setPasswordErrorText('잘못된 비밀번호입니다')
      } else if (
        Object.keys(error.response.data.fieldError).includes('email') &&
        !Object.keys(error.response.data.fieldError).includes('password')
      ) {
        setEmailErrorText('잘못된 이메일입니다.')
        setPasswordErrorText('')
      } else if (
        Object.keys(error.response.data.fieldError).includes('password') &&
        !Object.keys(error.response.data.fieldError).includes('email')
      ) {
        setPasswordErrorText('잘못된 비밀번호입니다.')
        setEmailErrorText('')
      }
    }
  }

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    setEmailValue(e.target.value)
    if (e.target.value === '') {
      setEmailErrorText('')
    } else if (!emailRegex.test(e.target.value)) {
      setEmailErrorText('잘못된 이메일입니다.')
    } else {
      setEmailErrorText('')
    }
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,24}$/
    )
    setPasswordValue(e.target.value)
    if (e.target.value === '') {
      setPasswordErrorText('')
    } else if (!passwordRegex.test(e.target.value)) {
      setPasswordErrorText('잘못된 비밀번호입니다.')
    } else {
      setPasswordErrorText('')
    }
  }

  return (
    <S.LoginWrapper>
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
            placeholder='이메일'
            onClear={() => setEmailValue('')}
            type='text'
            value={emailValue}
            length={emailValue.length}
            onChange={onEmailChange}
            errorText={emailErrorText}
          />
          <ValueInput
            placeholder='비밀번호'
            type='password'
            value={passwordValue}
            length={passwordValue.length}
            onClear={() => setPasswordValue('')}
            onChange={onPasswordChange}
            style={{
              border: passwordErrorText
                ? '0.0625rem solid #DF454A'
                : '0.0625rem solid #B8B8B8',
              color: passwordErrorText ? '#DF454A' : '#000000',
            }}
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
          disabled={emailValue === '' || passwordValue === ''}
          isAble={emailValue !== '' && passwordValue !== ''}
          onClick={onLogin}
        >
          로그인
        </S.LoginButton>
      </S.LoginButtonWrapper>
      <S.JoinWrapper>
        <S.JoinContainer>
          <S.MenuItem>또는</S.MenuItem>
          <div>
            <S.NoAccountItem>계정이 없으신가요?</S.NoAccountItem>
            <S.UserJoinItem
              onClick={() => {
                resetPage()
                resetPage1Obj()
                resetPage2Obj()
                resetPage3Obj()
                resetPhoneCertificate()
                resetPhoneCertificateText()
                resetEmailCertificate()
                resetEmailCertificateText()
                resetIsPasswordRgx()
                resetIsValidate()
                router.push('/auth/signUp')
              }}
            >
              회원가입
            </S.UserJoinItem>
          </div>
        </S.JoinContainer>
      </S.JoinWrapper>
    </S.LoginWrapper>
  )
}

export default LoginPage
