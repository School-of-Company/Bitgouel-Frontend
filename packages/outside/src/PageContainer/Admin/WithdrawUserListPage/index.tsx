'use client'

import { useGetWithDrawUserList } from '@bitgouel/api'
import { Bg6, Check, PeopleCircle, Plus, UserItem } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as S from './style'

const WithdrawUserListPage = () => {
  const { push } = useRouter()
  const [cohort, setCohort] = useState()
  const { data } = useGetWithDrawUserList()

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
        <S.UserListContainer>
          <S.RemarkBox>
            <div>
              <S.Remark>선택</S.Remark>
              <S.Remark>이름</S.Remark>
              <S.Remark>직업</S.Remark>
            </div>
            <div>
              <S.AloneCheckBox>
                <Check />
                선택 탈퇴
              </S.AloneCheckBox>
              <S.WithCheckBox>
                <PeopleCircle banner={true} />
                전체 탈퇴
              </S.WithCheckBox>
            </div>
          </S.RemarkBox>
          {data?.data.users.map((user) => (
            <UserItem key={user.id} item={user} status='request' />
          ))}
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default WithdrawUserListPage
