'use client'

import {
  useDeleteUserReject,
  useGetUserList,
  usePatchUserApprove,
} from '@bitgouel/api'
import {
  AppropriationModal,
  Bg6,
  Check,
  Minus,
  PeopleCircle,
  UserItem,
  handleSelect,
  useModal,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import * as S from './style'

const NewUserListPage = () => {
  const { push } = useRouter()
  const [userIds, setUserIds] = useState<string[]>([])
  const { data } = useGetUserList({
    keyword: '',
    authority: 'ROLE_USER',
    approveStatus: 'PENDING',
  })
  const { openModal } = useModal()
  const { mutate: approve } = usePatchUserApprove(userIds)
  const { mutate: reject } = useDeleteUserReject(userIds)

  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setUserIds(data?.users.map((user) => user.id))
    else setUserIds([])
  }

  const handleSelectUsers = (checked: boolean, userId: string) =>
    handleSelect({ checked, id: userId, setIds: setUserIds })

  const handleOpenModal = (type: 'approve' | 'reject') => {
    if (userIds.length === 0) return
    if (type === 'approve') {
      openModal(
        <AppropriationModal
          isApprove={true}
          question='가입을 수락하시겠습니까?'
          title=''
          purpose='수락하기'
          onAppropriation={() => approve()}
        />
      )
    } else if (type === 'reject')
      openModal(
        <AppropriationModal
          isApprove={false}
          question='가입을 거부하시겠습니까?'
          purpose='거부하기'
          title=''
          onAppropriation={() => reject()}
        />
      )
  }

  return (
    <div>
      <S.SlideBg url={Bg6}>
        <S.BgContainer>
          <S.ClubTitle>신규 가입자 명단</S.ClubTitle>
          <S.ButtonContainer>
            <S.ButtonBox onClick={() => push('/main/admin')}>
              <PeopleCircle />
              <span>사용자 명단</span>
            </S.ButtonBox>
            <S.ButtonBox onClick={() => push('/main/admin/withdraw')}>
              <Minus />
              <span>탈퇴 예정자 명단</span>
            </S.ButtonBox>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.UserListWrapper>
        <S.TopContainer>
          <S.RemarkBox>
            <span>선택</span>
            <span style={{ marginLeft: '1.5rem' }}>이름</span>
            <span style={{ marginLeft: '3.4rem' }}>직업</span>
          </S.RemarkBox>
          <S.SelectBoxContainer>
            <S.SelectBox type='allNew' htmlFor='allNew'>
              <input type='checkbox' id='allNew' onChange={onAll} />
              <PeopleCircle />
              전체 선택
            </S.SelectBox>
            <S.SelectBox
              type='approve'
              onClick={() => handleOpenModal('approve')}
            >
              <Check />
              선택 수락
            </S.SelectBox>
            <S.SelectBox
              type='reject'
              onClick={() => handleOpenModal('reject')}
            >
              <Check />
              선택 거절
            </S.SelectBox>
          </S.SelectBoxContainer>
        </S.TopContainer>
        <S.UserListContainer>
          {data?.users.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              authority={user.authority}
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
