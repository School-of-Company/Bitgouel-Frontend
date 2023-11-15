'use client'

import * as S from './style'
import { ValueInput } from '../../components'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePostLogin } from '../../../../api/common/src/hooks'
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
  const [passwordValue, setPasswordValue] = useState<string>('')
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
  const { mutate, error } = usePostLogin()

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
            onChange={(e) => {
              setEmailValue(e.target.value)
            }}
          />
          <ValueInput
            placeholder='비밀번호'
            type='password'
            value={passwordValue}
            length={passwordValue.length}
            onClear={() => setPasswordValue('')}
            onChange={(e) => {
              setPasswordValue(e.target.value)
            }}
            style={{
              border:
                error?.response?.status === 401 ||
                error?.response?.status === 400
                  ? '0.0625rem solid #DF454A'
                  : '0.0625rem solid #B8B8B8',
              color:
                error?.response?.status === 401 ||
                error?.response?.status === 400
                  ? '#DF454A'
                  : '#000000',
            }}
          />
        </S.InputContainer>
        <S.PasswordContainer>
          <S.MenuItem
            isError={
              error?.response?.status === 401 || error?.response?.status === 400
            }
          >
            {error?.response?.status === 401 || error?.response?.status === 400
              ? '잘못된 비밀번호입니다'
              : ''}
          </S.MenuItem>
          <S.PasswordSearch>비밀번호 찾기</S.PasswordSearch>
        </S.PasswordContainer>
      </S.InputWrapper>
      <S.LoginButtonWrapper>
        <S.LoginButton
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
