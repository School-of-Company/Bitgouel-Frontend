import {
  useDeleteUserReject,
  useGetUserList,
  usePatchUserApprove,
} from '@bitgouel/api'
import {
  AppropriationModal,
  NoneResult,
  UserItem,
  handleSelect,
  useModal,
} from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { NewDisplayInfo } from '../AdminDisplayInfo'
import * as S from './style'
import {
  AppropriationModalProps,
  purposeTypes,
  questionTypes,
} from '@bitgouel/types'

type messageType = '가입을 수락하였습니다' | '가입을 거절하였습니다'

const NewUserList = () => {
  const [userIds, setUserIds] = useState<string[]>([])
  const { data, refetch, isLoading } = useGetUserList({
    keyword: '',
    authority: 'ROLE_USER',
    approveStatus: 'PENDING',
  })
  const { openModal, closeModal } = useModal()

  const onSuccess = (message: messageType) => {
    closeModal()
    refetch()
    toast.success(message)
  }

  const { mutate: approve } = usePatchUserApprove(userIds, {
    onSuccess: () => onSuccess('가입을 수락하였습니다'),
  })
  const { mutate: reject } = useDeleteUserReject(userIds, {
    onSuccess: () => onSuccess('가입을 거절하였습니다'),
  })

  const handleOpenModal = (type: 'approve' | 'reject') => {
    if (userIds.length === 0) return toast.info('사용자를 선택해주세요')

    const ModalParameter: AppropriationModalProps = {
      isApprove: type === 'approve' ? true : false,
      question:
        type === 'approve'
          ? '가입을 수락하시겠습니까?'
          : '가입을 거부하시겠습니까?',
      title: '',
      purpose: type === 'approve' ? '수락하기' : '거부하기',
      onAppropriation: (callbacks) =>
        type === 'approve'
          ? approve(undefined, callbacks)
          : reject(undefined, callbacks),
    }

    openModal(
      <AppropriationModal
        isApprove={ModalParameter.isApprove}
        question={ModalParameter.question}
        title={ModalParameter.title}
        purpose={ModalParameter.purpose}
        onAppropriation={ModalParameter.onAppropriation}
      />
    )
  }

  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setUserIds(data?.users.map((user) => user.id))
    else setUserIds([])
  }

  const handleSelectUsers = (checked: boolean, userId: string) =>
    handleSelect({ checked, id: userId, setIds: setUserIds })

  return (
    <>
      <NewDisplayInfo onAll={onAll} handleOpenModal={handleOpenModal} />
      <S.UserListContainer>
        {isLoading && <div>신규 가입자 명단을 불러오는 중...</div>}
        {data?.users.length <= 0 ? (
          <NoneResult notDataTitle={'신규 가입자 명단이'} />
        ) : (
          data?.users.map((user) => (
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
          ))
        )}
      </S.UserListContainer>
    </>
  )
}

export default NewUserList
