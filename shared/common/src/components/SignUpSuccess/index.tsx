'use client'

import * as S from './style'

const SignUpSuccess = () => {
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
      <S.SignUpWrapper>
        <S.SignUpContainer>
          <S.MainTitle>회원가입 완료</S.MainTitle>
          <S.ViceTitle>관리자의 승인을 기다려주세요!</S.ViceTitle>
        </S.SignUpContainer>
      </S.SignUpWrapper>
      <S.BackButtonContainer>
        <S.BackButton>돌아가기</S.BackButton>
      </S.BackButtonContainer>
    </S.LoginWrapper>
  )
}

export default SignUpSuccess
