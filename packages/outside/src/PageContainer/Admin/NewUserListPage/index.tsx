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
  MainStyle,
  Minus,
  PeopleCircle,
  UserItem,
  handleSelect,
  useModal,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'
import { AdminDisplayInfo } from '@/components'

const NewUserListPage = () => {
  const { push } = useRouter()
  const [userIds, setUserIds] = useState<string[]>([])
  const { data, refetch } = useGetUserList({
    keyword: '',
    authority: 'ROLE_USER',
    approveStatus: 'PENDING',
  })
  const { openModal, closeModal } = useModal()
  const { mutate: approve } = usePatchUserApprove(userIds, {
    onSuccess: () => {
      closeModal()
      refetch()
      toast.success('가입을 수락하였습니다')
    }
  })
  const { mutate: reject } = useDeleteUserReject(userIds,{
    onSuccess: () => {
      closeModal()
      refetch()
      toast.success('가입을 거절하였습니다')
    }
  })

  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setUserIds(data?.users.map((user) => user.id))
    else setUserIds([])
  }

  const handleSelectUsers = (checked: boolean, userId: string) =>
    handleSelect({ checked, id: userId, setIds: setUserIds })

  const handleOpenModal = (type: 'approve' | 'reject') => {
    if (userIds.length === 0) return toast.info('사용자를 선택해주세요')
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
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg6}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>신규 가입자 명단</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push('/main/admin')}>
              <PeopleCircle />
              <span>사용자 명단</span>
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
          <AdminDisplayInfo.NewDisplayTop onAll={onAll} handleOpenModal={handleOpenModal} />
          <S.UserListContainer>
            {data?.users.map((user) => (
              <UserItem
                key={user.id}
                id={user.id}
                name={user.name}
                authority={user.authority}
                phoneNumber={user.phoneNumber}
                email={user.email}
                status='request'
                handleSelectUsers={handleSelectUsers}
                userIds={userIds}
              />
            ))}
          </S.UserListContainer>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default NewUserListPage
