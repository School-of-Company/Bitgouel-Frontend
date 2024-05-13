import React from 'react';
import { useRecoilValue } from 'recoil';
import { match } from 'ts-pattern';
import { SignUpPageNumber } from '@bitgouel/common';
import * as S from './style'

const SignUpTitle = () => {
      const signUpPage = useRecoilValue(SignUpPageNumber)
    return (
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
            <S.ShowCurrentPageBox>
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <S.CurrentPage
                    key={idx}
                    current={idx + 1}
                    page={signUpPage}
                  />
                ))}
            </S.ShowCurrentPageBox>
          </S.SignUpTitleWrapper>
    );
};

export default SignUpTitle;