'use client'

import { useGetUserList } from '@bitgouel/api'
import { Bg6, FilterOut, Minus, Plus, UserItem } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { AdminFilter } from '../../../components'
import * as S from './style'

const UserListPage = () => {
  const { push } = useRouter()
  const [keyword, setKeyword] = useState('')
  const { data, refetch } = useGetUserList({
    keyword,
    authority: 'ROLE_USER',
    approveStatus: 'APPROVED',
  })
  const [isFilter, setIsFilter] = useState(false)

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      refetch()
    }, 2000)

    return () => clearTimeout(delayFetch)
  }, [keyword])

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
            <S.ButtonBox onClick={() => push('/main/admin/withdraw')}>
              <Minus />
              <span>탈퇴 예정자 명단</span>
            </S.ButtonBox>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.UserListWrapper>
        <S.UserSearchContainer>
          <S.UserSearchInput
            value={keyword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setKeyword(e.target.value)
            }
            placeholder='이름으로 검색...'
          />
          <S.UserSearchFilterBox>
            <S.UserSearchFilter onClick={() => setIsFilter((prev) => !prev)}>
              <FilterOut />
              필터
            </S.UserSearchFilter>
            {isFilter && <AdminFilter type='current' keyword={keyword} />}
          </S.UserSearchFilterBox>
        </S.UserSearchContainer>
        <S.UserListContainer>
          <div>
            <S.DisplayBar>
              <span>이름</span>
              <span>직업</span>
            </S.DisplayBar>
          </div>
          {data?.data.users.map((user) => (
            <UserItem key={user.id} item={user} status='current' />
          ))}
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default UserListPage
