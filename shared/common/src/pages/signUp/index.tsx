'use client'

import { SignUpPageNumber } from '@bitgouel/common'
import { useRecoilValue } from 'recoil'
import { match } from 'ts-pattern'
import {
  SignUpPage1,
  SignUpPage2,
  SignUpPage3,
  SignUpSuccess,
} from './Pagination'
import * as S from './style'

const SignUpPage = () => {
  const signUpPage = useRecoilValue(SignUpPageNumber)

  return (
    <>
      {signUpPage === 4 ? (
        <SignUpSuccess />
      ) : (
        <S.SignUpWrapper>
          <S.SignUpTitleWrapper>
            <S.TitleItemWrapper>
              <S.TitleItem>
                {match(signUpPage)
                  .with(1, () => '만나서 반가워요!')
                  .with(2, () => '회원가입을 진행합니다')
                  .otherwise(() => '얼마 안 남았어요!')}
              </S.TitleItem>
              <S.SubTitleItem>
                {match(signUpPage)
                  .with(1, () => '어디서 오셨나요?')
                  .with(2, () => '보인의 인적 사항을 입력해 주세요!')
                  .otherwise(() => '보안 요소 입력해주세요.')}
              </S.SubTitleItem>
            </S.TitleItemWrapper>
            <S.ShowPageCurrentBox>
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <S.PageCurrent
                    key={idx}
                    current={idx + 1}
                    page={signUpPage}
                  />
                ))}
            </S.ShowPageCurrentBox>
          </S.SignUpTitleWrapper>
          <S.PaginationContainer>
            {signUpPage === 1 && <SignUpPage1 />}
            {signUpPage === 2 && <SignUpPage2 />}
            {signUpPage === 3 && <SignUpPage3 />}
          </S.PaginationContainer>
        </S.SignUpWrapper>
      )}
    </>
  )
}

export default SignUpPage
