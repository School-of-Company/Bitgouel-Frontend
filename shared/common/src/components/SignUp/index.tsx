'use client'

import * as S from './style'
import { useState } from 'react'
import { theme } from '../../styles/theme'
import Page1 from './Pagination/Page1'
import Page2 from './Pagination/Page2'
import Page3 from './Pagination/Page3'

const SignUp = () => {
  const [page, setPage] = useState<number>(3)

  return (
    <S.SignUpWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <S.TitleItemWrapper>
          <S.TitleItem>
            {page !== 3 ? '만나서 반가워요!' : '얼마 안 남았어요!'}
          </S.TitleItem>
          <S.SubTitleItem>
            {page !== 3 ? '어디서 오셨나요?' : '보안 요소를 입력해주세요.'}
          </S.SubTitleItem>
        </S.TitleItemWrapper>

        <S.ShowPageCurrentBox>
          <div
            style={{
              backgroundColor: `${
                page === 1 ? theme.color.main : theme.color.gray[700]
              }`,
            }}
          />
          <div
            style={{
              backgroundColor: `${
                page === 2 ? theme.color.main : theme.color.gray[700]
              }`,
            }}
          />
          <div
            style={{
              backgroundColor: `${
                page === 3 ? theme.color.main : theme.color.gray[700]
              }`,
            }}
          />
        </S.ShowPageCurrentBox>
      </div>
      {page === 1 && <Page1 page={page} setPage={setPage} />}
      {page === 2 && <Page2 page={page} setPage={setPage} />}
      {page === 3 && <Page3 page={page} setPage={setPage} />}
    </S.SignUpWrapper>
  )
}

export default SignUp
