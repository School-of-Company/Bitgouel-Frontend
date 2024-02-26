'use client'

import { useGetWithDrawUserList } from '@bitgouel/api'
import {
  Bg6,
  Check,
  FilterOut,
  PeopleCircle,
  Plus,
  UserItem
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AdminFilter } from '../../../components'
import { UserListContainer } from '../UserListPage/style'
import * as S from './style'

const WithdrawUserListPage = () => {
  const { push } = useRouter()
  const [cohort, setCohort] = useState<2022 | 2023 | 2024 | 0>(0)
  const { data } = useGetWithDrawUserList(1)
  const [isFilter, setIsFilter] = useState<boolean>(false)

  return (
    <div>
      <S.SlideBg url={Bg6}>
        <S.BgContainer>
          <S.ClubTitle>탈퇴 예정자 명단</S.ClubTitle>
          <S.ButtonContainer>
            <S.ButtonBox onClick={() => push('/main/admin')}>
              <PeopleCircle banner={true} />
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
        <S.TopContainer>
          <S.RemarkBox>
            <span>선택</span>
            <span>이름</span>
            <span>직업</span>
          </S.RemarkBox>
          <S.WithdrawButtonContainer>
            <S.FilterContainer>
              <S.FilterBox onClick={() => setIsFilter((prev) => !prev)}>
                <FilterOut />
                필터
              </S.FilterBox>
              {isFilter && <AdminFilter type='withdraw' />}
            </S.FilterContainer>
            <S.SelectWithdrawBox>
              <Check />
              선택 탈퇴
            </S.SelectWithdrawBox>
            <S.AllWithdrawBox>
              <PeopleCircle banner={true} />
              전체 탈퇴
            </S.AllWithdrawBox>
          </S.WithdrawButtonContainer>
        </S.TopContainer>
        <UserListContainer>
          {data?.data.students.map((user) => (
            <UserItem key={user.id} item={user} status='request' />
          ))}
        </UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default WithdrawUserListPage
