'use client'

import { useGetUserList } from '@bitgouel/api'
import { Bg6, FilterOut, Minus, Plus, UserItem } from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'

const UserListPage = () => {
  const { push } = useRouter()
  const [keyword, setKeyword] = useState('')
  const [authority, setAuthority] = useState<RoleEnumTypes | 'ROLE_USER'>(
    'ROLE_USER'
  )
  const { data, refetch } = useGetUserList({
    keyword,
    authority,
    approveStatus: 'APPROVED',
  })

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      refetch()
    }, 2000)

    return () => clearTimeout(delayFetch)
  }, [keyword, authority])

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
            <S.UserSearchInput
              value={keyword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setKeyword(e.target.value)
              }
              placeholder='이름으로 검색...'
            />
            <S.UserSearchFilter>
              <FilterOut />
              필터
            </S.UserSearchFilter>
          </S.UserSearchContainer>
          {data?.data.users.map((user) => (
            <UserItem key={user.id} item={user} status='current' />
          ))}
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default UserListPage
