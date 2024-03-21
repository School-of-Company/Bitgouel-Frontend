'use client'

import { useRouter } from 'next/navigation'
import * as S from './style'
import { useDeleteLogout } from '@bitgouel/api'
import { useResetRecoilState } from 'recoil'
import { PwPage } from '@bitgouel/common'

const SignUpSuccess = () => {
  const { push } = useRouter()
  const { mutate } = useDeleteLogout()
  const resetPwPage = useResetRecoilState(PwPage)

  return (
    <S.SignUpSuccessWrapper>
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
          <S.MainTitle>비밀번호 변경 완료</S.MainTitle>
          <S.ViceTitle>다시 로그인 해야 합니다.</S.ViceTitle>
        </S.SignUpContainer>
      </S.SignUpWrapper>
      <S.BackButtonContainer>
        <S.BackButton
          onClick={() => {
            push('/auth/login')
            mutate()
            resetPwPage()
          }}
        >
          돌아가기
        </S.BackButton>
      </S.BackButtonContainer>
    </S.SignUpSuccessWrapper>
  )
}

export default SignUpSuccess
