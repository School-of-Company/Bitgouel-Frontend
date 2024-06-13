'use client'

import { UserDisplayInfo } from '@outside/components'
import { useGetUserList } from '@bitgouel/api'
import {
  Bg6,
  MainStyle,
  Minus,
  NoneResult,
  Plus,
  SearchComponent,
  UserItem,
  useFilterSelect,
} from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
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

const filterTitle: string = '직업' as const

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
  const { data, refetch, isLoading } = useGetUserList({
    keyword,
    authority,
    approveStatus: 'APPROVED',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (keyword.includes(' ')) return toast.warning('공백을 제거해주세요')
    refetch()
  }

  useEffect(() => {
    refetch()
  }, [authority])

  return (
    <MainStyle.PageWrapper>
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
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <SearchComponent
            keywordPlaceholder='이름'
            onSubmit={onSubmit}
            keyword={keyword}
            setKeyword={setKeyword}
            refetch={refetch}
            filterProps={{ title: '권한', filterList, onSelected }}
          />
          <UserDisplayInfo />
          <S.UserListContainer>
            {isLoading && <div>사용자 명단을 불러오는 중...</div>}
            {data?.users.length <= 0 ? (
              <NoneResult notDataTitle={'사용자 목록이'} />
            ) : (
              data?.users.map((user) => (
                <UserItem
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  authority={user.authority}
                  phoneNumber={user.phoneNumber}
                  email={user.email}
                  status='current'
                />
              ))
            )}
          </S.UserListContainer>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default UserListPage
