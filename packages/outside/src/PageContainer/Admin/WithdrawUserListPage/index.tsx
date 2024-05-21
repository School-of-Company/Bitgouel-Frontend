'use client'

import { useDeleteUserWithdraw, useGetWithDrawUserList } from '@bitgouel/api'
import {
  AppropriationModal,
  Bg6,
  Check,
  FilterModal,
  FilterOut,
  MainStyle,
  PeopleCircle,
  Plus,
  UserItem,
  handleSelect,
  useFilterSelect,
  useModal,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { RequestDisplayBar, TopContainer } from '../NewUserListPage/style'
import { UserListContainer } from '../UserListPage/style'
import * as S from './style'

type cohortTypes = '1' | '2' | '3' | '4'
const defaultFilterList = [
  { text: '1기', item: '1', checked: true },
  { text: '2기', item: '2', checked: false },
  { text: '3기', item: '3', checked: false },
  { text: '4기', item: '4', checked: false },
]

const filterTitle: string = '기수'

const WithdrawUserListPage = () => {
  const { push } = useRouter()
  const [userIds, setUserIds] = useState<string[]>([])
  const [cohort, setCohort] = useState<cohortTypes>('1')
  const { data, refetch } = useGetWithDrawUserList(cohort)
  const { mutate } = useDeleteUserWithdraw(userIds)
  const { openModal } = useModal()
  const { filterList, onSelected } = useFilterSelect({
    title: filterTitle,
    defaultFilterList,
    setFilterPayload: setCohort,
  })
  const handleSelectUsers = (checked: boolean, userId: string) =>
    handleSelect({ checked, id: userId, setIds: setUserIds })

  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      setUserIds(data?.students.map((student) => student.userId))
    else setUserIds([])
  }

  const onWithdrawModal = () => {
    if (userIds.length === 0) return
    openModal(
      <AppropriationModal
        isApprove={false}
        question='탈퇴를 승인하시겠습니까?'
        purpose='승인하기'
        title=''
        onAppropriation={() => mutate()}
      />
    )
  }

  useEffect(() => {
    refetch()
  }, [cohort])

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>탈퇴 예정자 명단</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push('/main/admin')}>
              <PeopleCircle />
              <span>사용자 명단</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton onClick={() => push('/main/admin/new')}>
              <Plus />
              <span>신규 가입자 명단</span>
            </MainStyle.SlideButton>
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <TopContainer>
            <RequestDisplayBar>
              <div>
                <span>선택</span>
                <span>이름</span>
              </div>
              <span>직업</span>
              <span>전화번호</span>
              <span>이메일</span>
            </RequestDisplayBar>
            <S.WithdrawButtonContainer>
              <S.FilterBox
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
                필터
              </S.FilterBox>
              <S.AllWithdrawBox htmlFor='allWithdraw'>
                <input type='checkbox' id='allWithdraw' onChange={onAll} />
                <PeopleCircle />
                전체 선택
              </S.AllWithdrawBox>
              <S.SelectWithdrawBox onClick={onWithdrawModal}>
                <Check />
                선택 탈퇴
              </S.SelectWithdrawBox>
            </S.WithdrawButtonContainer>
          </TopContainer>
          <UserListContainer>
            {data?.students.map((user) => (
              <UserItem
                key={user.withdrawId}
                id={user.userId}
                name={user.studentName}
                authority={user.authority}
                phoneNumber={user.phoneNumber}
                email={user.email}
                status='request'
                handleSelectUsers={handleSelectUsers}
                userIds={userIds}
              />
            ))}
          </UserListContainer>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default WithdrawUserListPage
