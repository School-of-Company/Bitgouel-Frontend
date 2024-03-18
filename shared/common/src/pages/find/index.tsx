'use client'

import * as S from './style'
import NewPassword from './Pagination/NewPassword'
import ChangePasswordSuccess from './Pagination/ChangePasswordSuccess'
import { useRecoilState } from 'recoil'
import { PwPage } from '../../atoms'
import EmailCheck from './Pagination/EmailCheck'
import NumberValid from './Pagination/NumberValid'
import { useState } from 'react'

const FindPage = () => {
  const [pwPage, setPwPage] = useRecoilState(PwPage)
  const [emailValue, setEmailValue] = useState('')

  return (
    <>
      {pwPage === 4 ? (
        <ChangePasswordSuccess />
      ) : (
        <S.ChangePWWrapper>
          <S.ChangePWTitleWrapper>
            <S.TitleItemWrapper>
              <S.TitleItem>비밀번호 변경</S.TitleItem>
              <S.SubTitleItem>이메일 인증을 진행합니다</S.SubTitleItem>
            </S.TitleItemWrapper>
          </S.ChangePWTitleWrapper>
          <S.PaginationContainer>
            {pwPage === 1 && (
              <EmailCheck
                emailValue={emailValue}
                setEmailValue={setEmailValue}
              />
            )}
            {pwPage === 2 && <NumberValid emailValue={emailValue} />}
            {pwPage === 3 && <NewPassword />}
          </S.PaginationContainer>
        </S.ChangePWWrapper>
      )}
    </>
  )
}

export default FindPage
