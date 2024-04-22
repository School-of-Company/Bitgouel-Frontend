'use client'

import { useGetUserList } from '@bitgouel/api'
import {
  Bg6,
  FilterComponent,
  FilterOut,
  Minus,
  Plus,
  SearchIcon,
  UserItem,
} from '@bitgouel/common'
import {
  JobsFilterListTypes,
  RoleEnumTypes,
  UserListResponseTypes,
} from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as S from './style'

const UserListPage = () => {
  const [authority, setAuthority] = useState<RoleEnumTypes | 'ROLE_USER'>(
    'ROLE_USER'
  )
  const [jobs, setJobs] = useState<JobsFilterListTypes[]>([
    { text: '전체', item: 'all', checked: true },
    { text: '관리자', item: 'ROLE_ADMIN', checked: false },
    { text: '학생', item: 'ROLE_STUDENT', checked: false },
    { text: '선생님', item: 'ROLE_TEACHER', checked: false },
    { text: '대학 교수', item: 'ROLE_PROFESSOR', checked: false },
    { text: '교육청', item: 'ROLE_GOVERNMENT', checked: false },
    { text: '기업 강사', item: 'ROLE_COMPANY_INSTRUCTOR', checked: false },
    { text: '뽀짝 선생님', item: 'ROLE_BBOZZAK', checked: false },
  ])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.item === e.target.id
          ? { ...job, checked: true }
          : { ...job, checked: false }
      )
    )
    if (e.target.checked && e.target.id === 'all') setAuthority('ROLE_USER')
    else if (e.target.checked) setAuthority(e.target.id as RoleEnumTypes)
  }

  const { push } = useRouter()
  const [keyword, setKeyword] = useState('')
  const { data, refetch } = useGetUserList({
    keyword,
    authority,
    approveStatus: 'APPROVED',
  })
  const { users } = data?.data || ({} as UserListResponseTypes)
  const [isFilter, setIsFilter] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  useEffect(() => {
    refetch()
  }, [authority])

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
          <S.UserSearchFilterBox>
            <S.UserSearchFilter onClick={() => setIsFilter((prev) => !prev)}>
              <FilterOut />
              <span>필터</span>
            </S.UserSearchFilter>
            {isFilter && (
              <FilterComponent
                title='직업'
                filterList={jobs}
                onChange={onChange}
              />
            )}
          </S.UserSearchFilterBox>
        </S.UserSearchContainer>
        <S.UserListContainer>
          <div>
            <S.DisplayBar>
              <span>이름</span>
              <span>직업</span>
            </S.DisplayBar>
          </div>
          {users?.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              authority={user.authority}
              status='current'
            />
          ))}
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default UserListPage
