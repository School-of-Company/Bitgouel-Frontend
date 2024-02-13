'use client'

import { useGetUserList, usePatchUserApprove } from '@bitgouel/api'
import { Bg6, Check, Minus, PeopleCircle, UserItem } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import * as S from './style'
import { ChangeEvent, useState } from 'react'

const NewUserListPage = () => {
  const { push } = useRouter()
  const [userIds, setUserIds] = useState<string[]>([])
  const { data } = useGetUserList({
    keyword: '',
    authority: 'ROLE_USER',
    approveStatus: 'PENDING',
    page: 0,
    size: 10,
  })

  const handleSelectUsers = (checked: boolean, userId: string) => {
    if (checked) setUserIds((prev) => [...prev, userId])
    else setUserIds((prev) => prev.filter((listId) => listId !== userId))
  }

  const onAll = (checked: boolean) => {
    if (checked) setUserIds(data?.data.users.content.map((user) => user.id))
    else setUserIds([])
  }

  return (
    <div>
      <S.SlideBg url={Bg6}>
        <S.BgContainer>
          <S.ClubTitle>신규 가입자 명단</S.ClubTitle>
          <S.ButtonContainer>
            <S.ButtonBox onClick={() => push('/main/admin')}>
              <PeopleCircle banner={true} />
              <span>사용자 명단</span>
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
          <S.RemarkBox>
            <div>
              <S.Remark>선택</S.Remark>
              <S.Remark>이름</S.Remark>
              <S.Remark>직업</S.Remark>
            </div>
            <S.SelectBoxContainer>
              <S.SelectBox type='all' htmlFor='all'>
                <input
                  type='checkbox'
                  id='all'
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onAll(e.target.checked)
                  }
                  style={{ display: 'none' }}
                />
                <PeopleCircle banner={false} />
                전체 선택
              </S.SelectBox>
              <S.SelectBox type='approve'>
                <Check />
                선택 수락
              </S.SelectBox>
              <S.SelectBox type='reject'>
                <Check />
                선택 거절
              </S.SelectBox>
            </S.SelectBoxContainer>
          </S.RemarkBox>
          {data?.data.users.content.map((user) => (
            <UserItem
              key={user.id}
              item={user}
              status='request'
              handleSelectUsers={handleSelectUsers}
              userIds={userIds}
            />
          ))}
        </S.UserListContainer>
      </S.UserListWrapper>
    </div>
  )
}

export default NewUserListPage
