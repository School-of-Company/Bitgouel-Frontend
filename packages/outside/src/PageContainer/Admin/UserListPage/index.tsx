'use client'

import * as S from './style'
import { Bg6, UserItem } from '@bitgouel/common'
import { Plus, Minus, FilterOut } from '@bitgouel/common'
import { useRouter } from 'next/navigation'

const UserListPage = () => {
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg6}>
        <S.BgContainer>
          <S.ClubTitle>사용자 명단</S.ClubTitle>
          <S.ButtonContainer>
            <S.ButtonBox onClick={() => push('/main/admin/new')}>
              <Plus />
              <span>신규 가입자 명단</span>
            </S.ButtonBox>
            <S.ButtonBox onClick={() => push('/main/admin/quit')}>
              <Minus />
              <span>탈퇴 예정자 명단</span>
            </S.ButtonBox>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>

      <S.UserListWrapper>
        <S.UserListContainer>
          <S.UserSearchContainer>
            <S.UserSearchInput placeholder='이름으로 검색...'></S.UserSearchInput>
            <S.UserSearchFilter>
              <FilterOut />
              필터
            </S.UserSearchFilter>
          </S.UserSearchContainer>
          <UserItem />
          <UserItem />
          <UserItem />
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default UserListPage
