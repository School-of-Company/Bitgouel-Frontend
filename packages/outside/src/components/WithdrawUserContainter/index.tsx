import { UserListContainer } from '@/PageContainer/Admin/UserListPage/style'
import { useDeleteUserWithdraw, useGetWithDrawUserList } from '@bitgouel/api'
import {
  AppropriationModal,
  UserItem,
  handleSelect,
  useFilterSelect,
  useModal,
} from '@bitgouel/common'
import { ChangeEvent, useEffect, useState } from 'react'
import { WithdrawDisplayInfo } from '../AdminDisplayInfo'

const defaultFilterList = [
  { text: '1기', item: '1', checked: true },
  { text: '2기', item: '2', checked: false },
  { text: '3기', item: '3', checked: false },
  { text: '4기', item: '4', checked: false },
]

const filterTitle: string = '기수' as const

type cohortTypes = '1' | '2' | '3' | '4'

const WithdrawUserContainer = () => {
  const [userIds, setUserIds] = useState<string[]>([])
  const [cohort, setCohort] = useState<cohortTypes>('1')
  const { data, refetch } = useGetWithDrawUserList(cohort)
  const { mutate } = useDeleteUserWithdraw(userIds, {
    onSuccess: () => refetch(),
  })
  const { filterList, onSelected } = useFilterSelect({
    title: filterTitle,
    defaultFilterList,
    setFilterPayload: setCohort,
  })
  const { openModal } = useModal()

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
        onAppropriation={(callbacks) => mutate(undefined, callbacks)}
      />
    )
  }

  useEffect(() => {
    refetch()
  }, [cohort])

  return (
    <>
      <WithdrawDisplayInfo
        filterTitle={filterTitle}
        filterList={filterList}
        onSelected={onSelected}
        onAll={onAll}
        onWithdrawModal={onWithdrawModal}
      />
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
    </>
  )
}

export default WithdrawUserContainer
