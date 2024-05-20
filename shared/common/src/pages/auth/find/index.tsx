'use client'

import { PwPage } from '@bitgouel/common'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import AuthTitleMenu from '../AuthTitleMenu'
import { AuthWrapper } from '../style'
import {
  ChangePasswordSuccess,
  EmailCheck,
  EmailValid,
  NewPassword,
} from './Pagination'
import * as S from './style'

const mainTitleList = ['비밀번호 찾기', '비밀번호 찾기', '비밀번호 변경']
const subTitleList = ['이메일 인증을 진행합니다', '이메일 인증을 진행합니다', '새 비밀번호를 설정합니다']

const FindPage = () => {
  const pwPage = useRecoilValue(PwPage)
  const [emailValue, setEmailValue] = useState('')
  
  return (
    <>
      {pwPage === 4 && <ChangePasswordSuccess />}
      {pwPage < 4 && (
        <AuthWrapper>
          <AuthTitleMenu matchEl={pwPage} mainTitleList={mainTitleList} subTitleList={subTitleList} />
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
