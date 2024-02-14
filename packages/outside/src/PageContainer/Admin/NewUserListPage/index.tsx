'use client'

import { useGetUserList, usePatchUserApprove } from '@bitgouel/api'
import {
  Bg6,
  Check,
  CreateModal,
  Minus,
  PeopleCircle,
  UserItem,
  useModal,
} from '@bitgouel/common'
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
  })
  const { openModal } = useModal()
  const { mutate } = usePatchUserApprove(userIds)

  const handleSelectUsers = (
    e: ChangeEvent<HTMLInputElement>,
    userId: string
  ) => {
    if (e.target.checked) setUserIds((prev) => [...prev, userId])
    else setUserIds((prev) => prev.filter((listId) => listId !== userId))
  }

  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      setUserIds(data?.data.users.content.map((user) => user.id))
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
                  onChange={onAll}
                  style={{ display: 'none' }}
                />
                <PeopleCircle banner={false} />
                전체 선택
              </S.SelectBox>
              <S.SelectBox
                type='approve'
                onClick={() =>
                  openModal(
                    <CreateModal
                      question='가입을 수락하시겠습니까?'
                      title=''
                      onCreate={mutate}
                      createText='수락하기'
                    />
                  )
                }
              >
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
