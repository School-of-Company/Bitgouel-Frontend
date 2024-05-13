'use client'

import { PwPage } from '@bitgouel/common'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { match } from 'ts-pattern'
import { AuthWrapper } from '../auth/style'
import {
  ChangePasswordSuccess,
  EmailCheck,
  EmailValid,
  NewPassword,
} from './Pagination'
import * as S from './style'

const FindPage = () => {
  const [pwPage, setPwPage] = useRecoilState(PwPage)
  const [emailValue, setEmailValue] = useState('')

  return (
    <>
      {pwPage === 4 ? (
        <ChangePasswordSuccess />
      ) : (
        <AuthWrapper>
          <S.ChangePWTitleWrapper>
            <S.TitleItemWrapper>
              <S.TitleItem>
                {match(pwPage)
                  .with(1, () => '비밀번호 찾기')
                  .with(2, () => '비밀번호 찾기')
                  .otherwise(() => '비밀번호 변경')}
              </S.TitleItem>
              <S.SubTitleItem>
                {match(pwPage)
                  .with(1, () => '이메일 인증을 진행합니다')
                  .with(2, () => '이메일 인증을 진행합니다')
                  .otherwise(() => '새 비밀번호를 설정합니다')}
              </S.SubTitleItem>
            </S.TitleItemWrapper>
          </S.ChangePWTitleWrapper>
          <S.PaginationContainer>
            {pwPage === 1 && (
              <EmailCheck
                emailValue={emailValue}
                setEmailValue={setEmailValue}
              />
            )}
            {pwPage === 2 && <EmailValid emailValue={emailValue} />}
            {pwPage === 3 && <NewPassword />}
          </S.PaginationContainer>
        </AuthWrapper>
      )}
    </>
  )
}

export default FindPage
