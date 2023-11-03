import * as S from './style'
import ValueInput from '../ValueInput'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const router = useRouter()

  return (
    <S.LoginWrapper>
<<<<<<< HEAD
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
            onClear={() => setPasswordValue('')}
            type='password'
            value={passwordValue}
            length={passwordValue.length}
            onChange={(e) => {
              setPasswordValue(e.target.value)
            }}
          />
        </S.InputContainer>
        <S.PasswordContainer>
          <S.MenuItem>비밀번호를 잊었나요?</S.MenuItem>
          <S.PasswordSearch>비밀번호 찾기</S.PasswordSearch>
        </S.PasswordContainer>
      </S.InputWrapper>
      <S.LoginButtonWrapper>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginButtonWrapper>
      <S.JoinWrapper>
        <S.JoinContainer>
          <S.MenuItem>또는</S.MenuItem>
          <div>
            <S.NoAccountItem>계정이 없으신가요?</S.NoAccountItem>
            <S.UserJoinItem onClick={() => router.push('/auth/signUp')}>
              회원가입
            </S.UserJoinItem>
          </div>
        </S.JoinContainer>
      </S.JoinWrapper>
=======
      <S.LoginContainer>
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
              onClear={() => setPasswordValue('')}
              type='password'
              value={passwordValue}
              length={passwordValue.length}
              onChange={(e) => {
                setPasswordValue(e.target.value)
              }}
            />
          </S.InputContainer>
          <S.PasswordContainer>
            <S.MenuItem>비밀번호를 잊었나요?</S.MenuItem>
            <S.PasswordSearch>비밀번호 찾기</S.PasswordSearch>
          </S.PasswordContainer>
        </S.InputWrapper>
        <S.LoginButtonWrapper>
          <S.LoginButton>로그인</S.LoginButton>
        </S.LoginButtonWrapper>
        <S.JoinWrapper>
          <S.JoinContainer>
            <S.MenuItem>또는</S.MenuItem>
            <div>
              <S.NoAccountItem>계정이 없으신가요?</S.NoAccountItem>
              <S.UserJoinItem>회원가입</S.UserJoinItem>
            </div>
          </S.JoinContainer>
        </S.JoinWrapper>
      </S.LoginContainer>
>>>>>>> bdd51ca (Update loginContainer style)
    </S.LoginWrapper>
  )
}

export default Login
