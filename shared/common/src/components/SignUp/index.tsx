import * as S from './style'
import { useState } from 'react'
import Page1 from './Pagination/Page1'
import Page2 from './Pagination/Page2'
import Page3 from './Pagination/Page3'

const SignUp = () => {
  const [page, setPage] = useState<number>(1)

  return (
    <S.SignUpWrapper>
      <S.SignUpTitleWrapper>
        <S.TitleItemWrapper>
          <S.TitleItem>
            {page !== 3 ? '만나서 반가워요!' : '얼마 안 남았어요!'}
          </S.TitleItem>
          <S.SubTitleItem>
            {page !== 3 ? '어디서 오셨나요?' : '보안 요소를 입력해주세요.'}
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
      {page === 1 && <Page1 page={page} setPage={setPage} />}
      {page === 2 && <Page2 page={page} setPage={setPage} />}
      {page === 3 && <Page3 page={page} setPage={setPage} />}
    </S.SignUpWrapper>
  )
}

export default SignUp
