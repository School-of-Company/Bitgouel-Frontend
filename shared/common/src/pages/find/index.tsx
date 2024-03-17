'use client'

import * as S from './style'
import NewPassword from './Pagination/NewPassword'
import ChangePasswordSuccess from './Pagination/ChangePasswordSuccess'
import { useRecoilState } from 'recoil'
import { Page } from '../../atoms'

const FindPage = () => {
  const [page, setPage] = useRecoilState(Page)

  return (
    <>
      {page === 2 ? (
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
            {page === 1 && <NewPassword page={page} setPage={setPage} />}
          </S.PaginationContainer>
        </S.ChangePWWrapper>
      )}
    </>
  )
}

export default FindPage
