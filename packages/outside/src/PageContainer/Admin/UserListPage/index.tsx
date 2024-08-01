'use client'

import { useGetUserList } from '@bitgouel/api'
import {
  Bg6,
  FilterSearchComponent,
  ListManagement,
  MainStyle,
  NoneResult,
  WaitingAnimation,
  insertHyphen,
  useFilterSelect,
  useModal
} from '@bitgouel/common'
import {CompoundListItemComponent} from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import {
  ListManagementContent,
  UserDisplayInfo,
} from '@outside/components'
import { AdminItemListContainer } from '@outside/components/AdminListComponent/style'
import { ScrollListModal } from '@outside/modals'
import { FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

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
  const [keyword, setKeyword] = useState('')
  const { data, refetch, isLoading } = useGetUserList({
    keyword,
    authority,
    approveStatus: 'APPROVED',
  })
  const { openModal } = useModal()

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
            <MainStyle.SlideButton
              onClick={() =>
                openModal(
                  <ScrollListModal
                    title='다른 목록 관리'
                    children={<ListManagementContent />}
                  />
                )
              }
            >
              <ListManagement />
              <span>다른 목록 관리</span>
            </MainStyle.SlideButton>
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <FilterSearchComponent
            keywordPlaceholder='이름'
            onSubmit={onSubmit}
            keyword={keyword}
            setKeyword={setKeyword}
            refetch={refetch}
            filterProps={{ title: '권한', filterList, onSelected }}
          />
          <UserDisplayInfo />
          <AdminItemListContainer>
            {isLoading && <WaitingAnimation title={'사용자 목록을'} />}
            {data?.users.length <= 0 ? (
              <NoneResult title={'사용자 목록이'} />
            ) : (
              data?.users.map((user) => {
                const otherItemList: { width: string; text: string }[] = [
                  { width: '8rem', text: user.authority },
                  { width: '9rem', text: insertHyphen(user.phoneNumber) },
                  {
                    width: '9rem',
                    text: user.subscriptionGrade
                      ? `${user.subscriptionYear} (${user.subscriptionGrade})`
                      : `${user.subscriptionYear}`,
                  },
                  { width: 'auto', text: user.email },
                ]

                return (
                  <CompoundListItemComponent key={user.id}>
                    <CompoundListItemComponent.AdminItemContainer>
                      <CompoundListItemComponent.AdminItemName
                        name={user.name}
                        nameWidth='6rem'
                      />
                      {otherItemList.map((item) => (
                        <CompoundListItemComponent.OtherItem
                          key={item.text}
                          width={item.width}
                          text={item.text}
                        />
                      ))}
                    </CompoundListItemComponent.AdminItemContainer>
                  </CompoundListItemComponent>
                )
              })
            )}
          </AdminItemListContainer>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default UserListPage
