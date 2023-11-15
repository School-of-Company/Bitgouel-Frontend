'use client'

import * as S from './style'
import Page1 from './Pagination/Page1'
import Page2 from './Pagination/Page2'
import Page3 from './Pagination/Page3'
import SignUpSuccess from './Pagination/SignUpSuccess'
import { useRecoilState } from 'recoil'
import { match } from 'ts-pattern'
import { Page } from '../../atoms'

const SignUpPage = () => {
  const [page, setPage] = useRecoilState(Page)

  return (
    <>
      {page === 4 ? (
        <SignUpSuccess />
      ) : (
        <S.SignUpWrapper>
          <S.SignUpTitleWrapper>
            <S.TitleItemWrapper>
              <S.TitleItem>
                {match(page)
                  .with(1, () => '만나서 반가워요!')
                  .with(2, () => '회원가입을 진행합니다')
                  .otherwise(() => '얼마 안 남았어요!')}
              </S.TitleItem>
              <S.SubTitleItem>
                {match(page)
                  .with(1, () => '어디서 오셨나요?')
                  .with(2, () => '보인의 인적 사항을 입력해 주세요!')
                  .otherwise(() => '보안 요소 입력해주세요.')}
              </S.SubTitleItem>
            </S.TitleItemWrapper>
            <S.ShowPageCurrentBox>
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <S.PageCurrent key={idx} current={idx + 1} page={page} />
                ))}
            </S.ShowPageCurrentBox>
          </S.SignUpTitleWrapper>
          <S.PaginationContainer>
            {page === 1 && <Page1 page={page} setPage={setPage} />}
            {page === 2 && <Page2 page={page} setPage={setPage} />}
            {page === 3 && <Page3 page={page} setPage={setPage} />}
          </S.PaginationContainer>
        </S.SignUpWrapper>
      )}
    </>
  )
}

export default SignUpPage
