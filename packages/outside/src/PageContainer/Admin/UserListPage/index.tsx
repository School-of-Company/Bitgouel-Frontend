'use client'

import { useGetUserList } from '@bitgouel/api'
import {
  Bg6,
  FilterModal,
  FilterOut,
  MainStyle,
  Minus,
  Plus,
  SearchIcon,
  UserItem,
  useFilterSelect,
  useModal,
} from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as S from './style'

const defaultFilterList = [
  { text: '전체', item: '전체', checked: true },
  { text: '관리자', item: 'ROLE_ADMIN', checked: false },
  { text: '학생', item: 'ROLE_STUDENT', checked: false },
  { text: '선생님', item: 'ROLE_TEACHER', checked: false },
  { text: '대학 교수', item: 'ROLE_PROFESSOR', checked: false },
  { text: '교육청', item: 'ROLE_GOVERNMENT', checked: false },
  { text: '기업 강사', item: 'ROLE_COMPANY_INSTRUCTOR', checked: false },
  { text: '뽀짝 선생님', item: 'ROLE_BBOZZAK', checked: false },
]

const filterTitle: string = '직업'

const UserListPage = () => {
  const [authority, setAuthority] = useState<RoleEnumTypes | 'ROLE_USER'>(
    'ROLE_USER'
  )
  const { filterList, onSelected } = useFilterSelect({
    title: filterTitle,
    defaultFilterList,
    setFilterPayload: setAuthority,
  })
  const { push } = useRouter()
  const [keyword, setKeyword] = useState('')
  const { data, refetch } = useGetUserList({
    keyword,
    authority,
    approveStatus: 'APPROVED',
  })
  const { openModal } = useModal()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  useEffect(() => {
    refetch()
  }, [authority])

  return (
    <div>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>사용자 명단</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push('/main/admin/new')}>
              <Plus />
              <span>신규 가입자 명단</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton onClick={() => push('/main/admin/withdraw')}>
              <Minus />
              <span>탈퇴 예정자 명단</span>
            </MainStyle.SlideButton>
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <S.UserListWrapper>
        <S.UserSearchContainer>
          <S.UserSearchBox onSubmit={onSubmit}>
            <S.UserSearchInput
              value={keyword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setKeyword(e.target.value)
              }
              placeholder='이름으로 검색...'
            />
            <SearchIcon onClick={() => refetch()} />
          </S.UserSearchBox>
          <S.UserSearchFilter
            onClick={() =>
              openModal(
                <FilterModal
                  title={filterTitle}
                  filterList={filterList}
                  onSelected={onSelected}
                />
              )
            }
          >
            <FilterOut />
            <span>필터</span>
          </S.UserSearchFilter>
        </S.UserSearchContainer>
        <S.DisplayBar>
          <span>이름</span>
          <span>직업</span>
          <span>전화번호</span>
          <span>이메일</span>
        </S.DisplayBar>
        <S.UserListContainer>
          {data?.users.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              authority={user.authority}
              phoneNumber={user.phoneNumber}
              email={user.email}
              status='current'
            />
          ))}
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default UserListPage
