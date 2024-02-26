'use client'

import { useDeleteUserWithout, useGetWithDrawUserList } from '@bitgouel/api'
import {
  AppropriationModal,
  Bg6,
  Check,
  FilterOut,
  PeopleCircle,
  Plus,
  UserItem,
  useModal,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { AdminFilter } from '../../../components'
import { UserListContainer } from '../UserListPage/style'
import * as S from './style'
import { TopContainer } from '../NewUserListPage/style'

const WithdrawUserListPage = () => {
  const { push } = useRouter()
  const [userIds, setUserIds] = useState<string[]>([])
  const { data } = useGetWithDrawUserList('1')
  const { mutate } = useDeleteUserWithout(userIds)
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const { openModal } = useModal()

  const handleSelectUsers = (
    e: ChangeEvent<HTMLInputElement>,
    userId: string
  ) => {
    if (e.target.checked) setUserIds((prev) => [...prev, userId])
    else setUserIds((prev) => prev.filter((listId) => listId !== userId))
  }
  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      setUserIds(data?.data.students.map((student) => student.studentId))
    else setUserIds([])
  }
  const onWithdrawModal = () => {
    if (userIds.length === 0) return
    openModal(
      <AppropriationModal
        isApprove={false}
        question='가입을 거부하시겠습니까?'
        purpose='거부하기'
        title=''
        onAppropriation={() => mutate()}
      />
    )
  }

  return (
    <div>
      <S.SlideBg url={Bg6}>
        <S.BgContainer>
          <S.ClubTitle>탈퇴 예정자 명단</S.ClubTitle>
          <S.ButtonContainer>
            <S.ButtonBox onClick={() => push('/main/admin')}>
              <PeopleCircle />
              <span>사용자 명단</span>
            </S.ButtonBox>
            <S.ButtonBox onClick={() => push('/main/admin/new')}>
              <Plus />
              <span>신규 가입자 명단</span>
            </S.ButtonBox>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.UserListWrapper>
        <TopContainer>
          <S.RemarkBox>
            <span>선택</span>
            <span style={{ marginLeft: '1.5rem' }}>이름</span>
          </S.RemarkBox>
          <S.WithdrawButtonContainer>
            <S.FilterContainer>
              <S.FilterBox onClick={() => setIsFilter((prev) => !prev)}>
                <FilterOut />
                필터
              </S.FilterBox>
              {isFilter && <AdminFilter type='withdraw' />}
            </S.FilterContainer>
            <S.AllWithdrawBox id='allWithdraw' htmlFor='allWithdraw'>
              <input
                type='checkbox'
                id='allWithdraw'
                onChange={onAll}
                style={{ display: 'none' }}
              />
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
          {data?.data.students.map((user) => (
            <UserItem
              key={user.studentId}
              id={user.studentId}
              name={user.studentName}
              status='request'
              handleSelectUsers={handleSelectUsers}
              userIds={userIds}
            />
          ))}
        </UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default WithdrawUserListPage
